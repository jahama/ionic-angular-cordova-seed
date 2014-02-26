var g = require('dyson-generators');

module.exports = {
	path: '/jobs/:id?',
    collection: true,
	template: {
		id: g.id,
        title: 'Freelancer belly-dancer in Abu Dhabi with a very professional skills',
        date: '21/07/13',
        salary_range: '20,000 - 29,000 AED/month',
        location: 'Abu Dhabi, a place far far away from Dubai and Sharjah',
        employment_type: 'Full Time',
        benefits: 'commissions',
        min_work_experience: '0-1 Years',
        min_education_level: 'High-School / Secondary School',
        company_size: '11-50 Employees',
        career_level: 'Junior',
        description: 'Please read the details bellow carefully: bla bla bla bla bla bla',
        owner: '1',
        status: 'OK'
    },
    container: {
        jobs: function(params, query, data) {
            return data;
        }
    }
};
