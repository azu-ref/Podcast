import {Link} from '../routes'
import slug from '../helpers/slug'

export default class VolverLink extends React.Component {
	render() {
		const { clip } = this.props
		return <>
			<nav>
				<Link route='channel' params={{
				slug: slug(clip.channel.title),
				id: clip.channel.id
				}}>
					<a className='close'>
						&lt; Volver
					</a>
				</Link>
			</nav>

			<style jsx>{`
				nav {
          background: none;
        }
        nav a {
          display: inline-block;
          padding: 15px;
          color: white;
          cursor: pointer;
          text-decoration: none;
        }
				`}</style>
		</>
	}
}