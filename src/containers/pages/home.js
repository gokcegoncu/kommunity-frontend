import { connect } from 'react-redux';
import Home from '@/components/pages/home';

const mapStateToProps = state => ({ state });
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);
