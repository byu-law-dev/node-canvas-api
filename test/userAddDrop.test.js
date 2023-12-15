/* global test, expect */
const { expect, assert } = require('chai');

const 

const getCourses = require('../src/getCourses')

describe('getCourses function exists', () => {
  it('typecheck', ()=> {
    expect(getCourses).to.be.a('function');
  });
});

describe('getCoursesForTerm', () => {
  it('All Courses for 20241', async () => {
    const courses = await getCourses(1, ['enrollment_term_id=sis_term_id:20241']);
    expect(courses).to.be.a('array');
    assert.isAtLeast(courses.length,10, `Courses.length ${courses.length} was not at least 10`);
  }).timeout(15000);

});


//https://byulaw.test.instructure.com/api/v1/accounts/1/courses?enrollment_term_id=49&sort=sis_course_id&order=asc&search_by=course&include%5B%5D=total_students&include%5B%5D=active_teachers&include%5B%5D=subaccount&include%5B%5D=term&include%5B%5D=concluded&include%5B%5D=ui_invoked&teacher_limit=25&per_page=15&no_avatar_fallbac