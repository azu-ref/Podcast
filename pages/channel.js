import Error from 'next/error'
import Layout from '../components/Layout'
import ChannelTitle from '../components/ChannelTitle'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'

export default class extends React.Component {

  static async getInitialProps({ query, res }) {
    try {
      let idChannel = query.id
      let [reqChannel, reqAudio, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
      ])

      if(reqChannel.status >= 400) {
        res.statusCode = reqChannel.status
        return { 
          channel: null, 
          audioClips: null, 
          series: null,
          statusCode: reqChannel.status
        }
      }
  
      let { body: { channel } } = await reqChannel.json()
      let { body: { audio_clips: audioClips } } = await reqAudio.json()
      let { body: { channels: series } } = await reqSeries.json()    
  
      return { channel, audioClips, series, statusCode: 200 }
    } catch(e) {
      return { 
        channel: null, 
        audioClips: null, 
        series: null,
        statusCode: 503
      }
    }
  }

  render() {
    const  { channel, audioClips, series, statusCode } = this.props

    if(statusCode !== 200) {
      return <Error statusCode={ statusCode } />
    }

    return <Layout title={ `Podcast | ${channel.title}` } >
      <ChannelTitle channel = { channel } />

      {series.length > 0 &&
        <ChannelGrid channels = {series} /> 
      }
    
      <PodcastList audioClips={ audioClips } />
    </Layout>
  }

  
}