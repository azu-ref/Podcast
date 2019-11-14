import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

export default class extends React.Component {

  static async getInitialProps() {
    let req = await fetch('https://api.audioboom.com/channels/recommended?api_version=2')
    let { body: channels } = await req.json()
    // console.log(channels)

    return { channels }
  }

  render() {
    const { channels } = this.props    
    return <Layout title='Podcasts'>      
      <ChannelGrid channels = {channels}/>      
    </Layout>
  }
}