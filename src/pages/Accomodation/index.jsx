import { useParams } from 'react-router-dom'
import DetailedAccomodation from '../../components/DetailedAccomodation'

function Accomodation () {
    const { id } = useParams()

    return (
        <DetailedAccomodation id={id} />
    )
}

export default Accomodation