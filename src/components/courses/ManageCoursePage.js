import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
//import toastr from 'toastr';
//import PropTypes from 'prop-types';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            //saving: false
        };
        this.updateCoruseState = this.updateCoruseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCoruseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.action.saveCourse(this.state.course);
        this.context.router.push('/cousres');
    }


     redirect(){
         this.setState({saving: false});
         toastr.success('Course saved');
         this.context.router.push('/courses');
     }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCoruseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    };

}


    ManageCoursePage.propTypes = {
        course: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

//Pull inthe React Router context so router is available on this.context.router.
//ManageCoursePage.contextTypes = {
 //   router: PropTypes.object
//};

function getCourseById(courses, id) {

    const course = courses.filter(course => course.id = id);
    if (course.length) return course[0]; //filter grab first output.
    return null;
}


function mapStateToProps(state, ownProps) {
    const coruseId = ownProps.params.id; //from the path '/course/:id'

    let course = {
        id: '', title: '', watchHref: '',
        authorId: '', length: '', category: ''
    };

    if (coruseId && state.courses.length > 0) {
        course = getCourseById(state.courses, coruseId);
    }

    const authorsFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropDown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);


