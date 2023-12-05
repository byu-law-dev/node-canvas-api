/* global test, expect */
const { expect, assert } = require('chai');

const getUsersInCourse = require('../src/getUsersInCourse.js')

describe('getUsersInCourse function exists', () => {
  it('typecheck', ()=> {
    expect(getUsersInCourse).to.be.a('function');
  });
});

describe('getCoursesForTerm', () => {
  const courseId = '20235-505-1';

  it(`Get Users in course ${courseId}`, async () => {
    const enrolled = await getUsersInCourse(`sis_course_id:${courseId}`);
    expect(enrolled).to.be.a('array');
    assert.isAtLeast(enrolled.length,10, `Enrolled.length ${enrolled.length} was not at least 10`);
  }).timeout(15000);
});