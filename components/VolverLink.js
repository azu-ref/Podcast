import Link from 'next/link'

export default class VolverLink extends React.Component {
	render() {
		const { clip } = this.props
		return <>
			<nav>
				<Link href={`/channel?id=${clip.channel.id}`}>
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