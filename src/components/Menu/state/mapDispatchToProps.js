import { toggleMenu } from './actions';

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default mapDispatchToProps;
