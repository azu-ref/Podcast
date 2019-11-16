import Link from 'next/link'
import Layout from '../components/Layout'
import ChannelTitle from '../components/ChannelTitle'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'

export default class extends React.Component {

  static async getInitialProps({ query }) {
    let idChannel = query.id

    let [reqChannel, reqAudio, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    ])

    let { body: { channel } } = await reqChannel.json()
    let { body: { audio_clips: audioClips } } = await reqAudio.json()
    let { body: { channels: series } } = await reqSeries.json()    

    return { channel, audioClips, series }
  }

  render() {
    const  { channel, audioClips, series } = this.props

    return <Layout title={ `Podcast | ${channel.title}` } >
      <ChannelTitle channel = { channel } />

      {series.length > 0 &&
        <ChannelGrid channels = {series} /> 
      }
    
      <PodcastList audioClips={ audioClips } />
    </Layout>
  }

  
}