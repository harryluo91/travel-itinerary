angular
    .module('travelItineraryApp')
    .constant('DAY_DETAILS', [{
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: `
                <p>Arrive at Saint John around 1:00pm...</p>
            `
        },
        pointOfInterest: [{
            title: 'POI1',
            details: 'Some details 1',
            slides: [{
                image: 'https://c8.staticflickr.com/6/5625/21555666439_2f44861ecc_b.jpg',
                text: 'Nice image'
            }, {
                image: 'https://c5.staticflickr.com/1/512/19813199212_b35dfe6049_b.jpg',
                text: 'Nice image 2'
            }]
        }, {
            title: 'POI2',
            details: 'Some details 2',
            slides: [{
                image: 'https://c8.staticflickr.com/6/5625/21555666439_2f44861ecc_b.jpg',
                text: 'Nice image'
            }, {
                image: 'https://c5.staticflickr.com/1/512/19813199212_b35dfe6049_b.jpg',
                text: 'Nice image 2'
            }]
        }]
    }]);