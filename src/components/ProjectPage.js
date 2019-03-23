import React from 'react';
import { handlePageView } from '../tools/analytics';
import ProjectContainer from './ProjectContainer'

export default class ProjectPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className="project_page">
        <ProjectContainer {...this.props} />
      </div>
    );
  }
}