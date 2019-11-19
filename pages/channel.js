import Error from './_error'
import Layout from '../components/Layout'
import ChannelTitle from '../components/ChannelTitle'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'
import PodcastPlayer from '../components/PodcastPlayer'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { openPodcast: null }
  }

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

  openPodcast = (event, podcast) => {
    event.preventDefault()
    this.setState({
      openPodcast: podcast
    })
  }
  
  closePodcast = (event, podcast) => {
    event.preventDefault()
    this.setState({
      openPodcast: null
    })
  }

  render() {
    const  { channel, audioClips, series, statusCode } = this.props
    const { openPodcast } = this.state

    if(statusCode !== 200) {
      return <Error statusCode={ statusCode } />
    }

    return <Layout title={ `Podcast | ${channel.title}` } >
      <ChannelTitle channel = { channel } />
      { openPodcast && <PodcastPlayer clip={ openPodcast } onClose={ this.closePodcast } />}
      {series.length > 0 &&
        <ChannelGrid channels = {series} /> 
      }
    
      <PodcastList audioClips={ audioClips } openPodcast={ this.openPodcast } />
    </Layout>
  }

  
}