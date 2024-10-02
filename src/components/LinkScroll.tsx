import { Link, LinkProps } from 'react-router-dom'

export default function LinkScroll(props: LinkProps) {
    return <Link {...props} to={props.to} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}>{props.children}</Link>
}
