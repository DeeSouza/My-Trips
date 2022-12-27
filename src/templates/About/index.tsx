import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'

const AboutTemplate = () => (
	<S.Content>
		<LinkWrapper href="/">
			<CloseOutline size={32} />
		</LinkWrapper>

		<S.Heading>My Trips</S.Heading>
		<S.Body>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
			vel neque. Nihil temporibus nisi, dolorem quisquam dignissimos officiis
			pariatur autem deleniti distinctio aperiam excepturi? Quas corporis id
			nesciunt repellat voluptatum.
		</S.Body>
	</S.Content>
)

export default AboutTemplate
