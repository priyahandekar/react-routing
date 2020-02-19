import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import LeftPanel from '../component/LeftPanel';
import StaticalData from '../component/StaticalData';
import {
  getUserProfileInfo,
  getListOfRepo,
} from '../Redux/modules/vedantu';
function mapStateToProps(state) {
  return {
    vedantu: state.vedantu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserProfileInfo: (value) => dispatch(getUserProfileInfo(value)),
    getListOfRepo: (value) => dispatch(getListOfRepo(value)),
  }
}
class LandingPage extends React.Component {
  state = {
    ListOfRepo: [],
    languageSelected: 'All',
  }
  componentDidMount() {
    this.props.getUserProfileInfo();
    this.props.getListOfRepo();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.vedantu.repoData !== nextProps.vedantu.repoData) {
      this.setState({
        ListOfRepo: nextProps.vedantu.repoData.sort(function (start, end) { return new Date(end.updated_at) - new Date(start.updated_at); }),
      });
    }
  }
  formatDate = (value) => {
    const dateToString = new Date(value).toString();
    const dateInArray = dateToString.split(" ");
    const returnValue = `${dateInArray[2]} ${dateInArray[1]} ${dateInArray[3]}`;
    return returnValue;
  }
  handleSearchResultChange = (event) => {
    const listOfRepoBeforeFilter = this.props.vedantu.repoData ? this.props.vedantu.repoData : [];
    const listOfRepoAfterFilter = listOfRepoBeforeFilter.filter(keys => (
      ((keys.name).toLowerCase()).startsWith((event.target.value).toLowerCase())
    ));
    this.setState({
      ListOfRepo: listOfRepoAfterFilter.sort(function (start, end) { return new Date(end.updated_at) - new Date(start.updated_at); }),
    });
  }
  handleAnchorTagClicked = (value) => {
    const listOfRepoBeforeFilterA = this.props.vedantu.repoData ? this.props.vedantu.repoData : [];
    const listOfRepoAfterFilterA = listOfRepoBeforeFilterA.filter(keys => (
      keys.language === value
    ));
    this.setState({
      languageSelected: value,
      ListOfRepo: listOfRepoAfterFilterA.sort(function (start, end) { return new Date(end.updated_at) - new Date(start.updated_at); }),
    });
  }
  resetLanguageFilter = () => {
    const listOfRepoBeforeLangFilter = this.props.vedantu.repoData ? this.props.vedantu.repoData : [];
    this.setState({
      languageSelected: 'All',
      ListOfRepo: listOfRepoBeforeLangFilter.sort(function (start, end) { return new Date(end.updated_at) - new Date(start.updated_at); }),
    });
  }
  render() {
    return (
      <div className="container margin-top-40">
        <Row>
          <Col lg={3} sm={3} xs={12} md={3}>
            <LeftPanel
              profileData={this.props.vedantu.profileData}
            />
          </Col>
          <Col lg={9} sm={9} xs={12} md={9}>
            <div>
              <StaticalData />
            </div>
            <Row>
              <Col lg={8} sm={6} xs={12} md={4} className="margin-top-20">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find a repository..."
                  onChange={this.handleSearchResultChange}
                />
              </Col>
              <Col lg={2} sm={3} xs={6} md={4} className="dropdown margin-top-20">
                <button className="btn btn-default dropdown-toggle full-width edit-bio-button-style" type="button" data-toggle="dropdown">
                  <span>Type: </span>
                  <span className="font-bold">All</span>
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu full-width padding-top-0">
                  <li className="white-gray padding-top-bottom-5">
                    <span className="margin-left-5">Select type:</span>
                    <span className="float-right margin-right-5"><i className="fa fa-times" aria-hidden="true" /></span>
                  </li>
                  <li><a href="#">All</a></li>
                  <li><a href="#">Sources</a></li>
                  <li><a href="#">Forks</a></li>
                  <li><a href="#">Archive</a></li>
                  <li><a href="#">Mirrors</a></li>
                </ul>
              </Col>
              <Col lg={2} sm={3} xs={6} md={4} className="dropdown margin-top-20">
                <button className="btn btn-default dropdown-toggle full-width edit-bio-button-style padding-left-5" type="button" data-toggle="dropdown">
                  <span>Language: </span>
                  <span className="font-bold">All</span>
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu full-width padding-top-0">
                  <li className="white-gray padding-top-bottom-5">
                    <span className="margin-left-5">Select type:</span>
                    <span className="float-right margin-right-5"><i className="fa fa-times" aria-hidden="true" /></span>
                  </li>
                  <li onClick={this.resetLanguageFilter}>
                    <a href="#">
                      All
                    </a>
                  </li>
                  <li onClick={() => this.handleAnchorTagClicked('HTML')}>
                    <a href="#">
                      HTML
                    </a>
                  </li>
                  <li onClick={() => this.handleAnchorTagClicked('JavaScript')}>
                    <a href="#">
                      JavaScript
                    </a>
                  </li>
                  <li onClick={() => this.handleAnchorTagClicked('CSS')}>
                    <a href="#">
                      CSS
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <hr />
            {this.state.ListOfRepo.map(keys => (
              <div key={keys.id}>
                <div>
                  <h3>
                    <a href="" className="repository-name font20">{keys.name}</a>
                  </h3>
                </div>
                <div className="description-style">
                  {keys.description}
                </div>
                <div className="display-flex-only padding-top-16">
                  {keys.language &&
                    <div className="padding-right-20">
                      {keys.language}
                    </div>
                  }
                  <div>
                    <span className="margin-right-5">Updated on</span>
                    <span>{this.formatDate(keys.updated_at)}</span>
                  </div>
                </div>
                <hr />
              </div>
            ))
            }
          </Col>
        </Row>
      </div>
    );
  }
}
LandingPage.propTypes = {
  getUserProfileInfo: PropTypes.func,
  getListOfRepo: PropTypes.func,
}
LandingPage.defaultProps = {
  getUserProfileInfo: () => { },
  getListOfRepo: () => { },
}
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);