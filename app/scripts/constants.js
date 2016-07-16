angular
    .module('travelItineraryApp')
    .constant('DAY_DETAILS', [{
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: `
                <div class="col-sm-12">
                    <p>Arrive at Saint John around 1:30pm...</p>
                    <p>Things to do after landing:</p>
                    <ul>
                        <li>Pickup your booked baby from the airport (You can find info about car rental services on the right panel)</li>
                        <li>Drive to you hotel and checkin (Info available on the right panel)</li>
                    </ul>
                    <p>
                        It should take you about 30 mins to get from the airport to your hotel, if everything works out as expected, you should be able to officially start your trip around 3:00pm to 3:30pm.
                    </p>
                    <p>Below are some of the point of interest and the things you can do for the rest o the day (<em>suggestions only, for more details refer to the tripadvisor page on the right</em>):</p>
                </div>
            `
        },
        pointOfInterest: [{
            title: 'Carleton Martello Tower',
            details: `
                <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Historic Sites&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Land Marks</p>
                <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d294366-Reviews-Carleton_Martello_Tower-Saint_John_New_Brunswick.html">Link</a></p>
                <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Carleton+Martello+Tower+National+Historic+Park/@45.251527,-66.0790194,17z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b4f47c916c55:0x98287c8a7c72700!8m2!3d45.2515232!4d-66.0768254?hl=en">454 Whipple St, Saint John, NB</a></p>
                <p class="col-sm-12">Suggested Duration: 30 mins</p>
            `,
            slides: [{
                image: '../images/day1/1-1.jpg'
            }, {
                image: '../images/day1/1-2.jpg'
            }, {
                image: '../images/day1/1-3.jpg'
            }, {
                image: '../images/day1/1-4.jpg'
            }]
        }, {
            title: 'Reversing Falls',
            details: `
                <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Waterfall&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature Parks</p>
                <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d318433-Reviews-Reversing_Falls-Saint_John_New_Brunswick.html">Link</a></p>
                <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Reversing+Falls/@45.2602293,-66.0988683,15z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b4959817aa3f:0x718dfc6ad823909f!8m2!3d45.2602151!4d-66.0900921?hl=en">Reversing Falls, Saint John, NB</a></p>
                <p class="col-sm-12">Suggested Duration: 30 mins</p>
            `,
            slides: [{
                image: '../images/day1/1-5.jpg'
            }, {
                image: '../images/day1/1-6.jpg'
            }, {
                image: '../images/day1/1-7.jpg'
            }, {
                image: '../images/day1/1-8.jpg'
            }]
        }]
    }]);