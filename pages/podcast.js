import Layout from '../components/Layout'
import VolverLink from '../components/VolverLink'
import Reproductor from '../components/Reproductor'

export default class extends React.Component {
	static async getInitialProps({ query }) {
		let idPodcast = query.id

		let reqPodcast = await fetch(`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`)
		let { body: { audio_clip: clip }} = await reqPodcast.json()

		return { clip }
	}

	render() {
		let { clip } = this.props

		return <Layout title={ `Podcast | ${ clip.title }` }>
		<Reproductor clip={clip}>
      <VolverLink clip={clip}/>  
    </Reproductor>      
    </Layout>
	} 
}