/* global test, expect */
const { expect, assert } = require('chai');

const getAllCoursesInAccount = require('../src/getAllCoursesInAccount')

describe('getAllCoursesInAccount function exists', () => {
  it('typecheck', ()=> {
    expect(getAllCoursesInAccount).to.be.a('function');
  });
});

describe('getAllCoursesForAccount 1', () => {
  it('Account 1', async () => {
    const courses = await getAllCoursesInAccount(1);
    expect(courses).to.be.a('array');
  }).timeout(10000);
});


//https://byulaw.test.instructure.com/api/v1/accounts/1/courses?enrollment_term_id=49&sort=sis_course_id&order=asc&search_by=course&include%5B%5D=total_students&include%5B%5D=active_teachers&include%5B%5D=subaccount&include%5B%5D=term&include%5B%5D=concluded&include%5B%5D=ui_invoked&teacher_limit=25&per_page=15&no_avatar_fallbac