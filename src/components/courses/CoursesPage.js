import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
     /*   this.state = {
            course: {title: ""}
        };*/

      //  this.onTitleChange = this.onTitleChange.bind(this);
     //   this.onClickSave = this.onClickSave.bind(this);

     

    /* onTitleChange(event){
         const course = this.state.course;
         course.title = event.target.value;
         this.setState({course: course});
     }*/

  //   onClickSave(){
      //    this.props.actions.createCourse(this.state.course);
       //  this.props.createCourse(this.state.course);
         //this.props.dispatch(courseActions.createCourse(this.state.course));
  //   }

courseRow(course,index){
    return <div key = {index}>{course.title}</div>;
}

redirectToAddCoursePage(){
    browserHistory.push('/course');
}

    render(){
          const {courses} = this.props;
        return(
          <div>
              <h1>Courses</h1>
              <input type = "submit" value = "Add Course"
              className = "btn btn-primary" 
              onClick = {this.redirectToAddCoursePage}/>
              <CourseList courses = {courses}/>  
              </div>


              /*  <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
              {/*<h2> Add Course</h2>*/
/*
        <input type = "text" onChange = {this.onTitleChange} 
                        value = {this.state.course.title}/>
        <input type = "submit" value = "save" 
                                onClick = {this.onClickSave}/>*/
        );           
             
    }
}

CoursesPage.propTypes={
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
actions : bindActionCreators(courseActions, dispatch)
// createCourse: course => dispatch(courseActions.createCourse(course))
    };
}
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps )(CoursesPage);