

import Car from './Car'


function Garage() {
const brand = 'ferrari';

return (
    <>
    <h1>Who lives inside my Garage?</h1>
    <Car brand={brand} />
    </>
)
}
export default Garage;