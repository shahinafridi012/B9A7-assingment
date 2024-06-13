import PropTypes from 'prop-types'; // ES6

const Cooking = ({ food }) => {
    console.log(food)
    return (
        <div>
            
        </div>
    );
};
Cooking.PropTypes = {
    food: PropTypes.object.isRequired
}
export default Cooking;