angular
    .module('travelItineraryApp')
    .constant('DAY_DETAILS', [{
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p>Arrive at Saint John around 1:30pm...</p>  ' +
                '       <p>Things to do after landing:</p>  ' +
                '       <ul>  ' +
                '           <li>Pickup your booked baby from the airport (You can find info about car rental services on the right panel)</li>  ' +
                '           <li>Drive to you hotel and checkin (Info available on the right panel)</li>  ' +
                '       </ul>  ' +
                '       <p>  ' +
                '           It should take you about 30 mins to get from the airport to your hotel, if everything works out as expected, you should be able to officially start your trip around 3:00pm to 3:30pm.  ' +
                '       </p>  ' +
                '       <p>Below are some of the point of interest and the things you can do for the rest o the day (<em>suggestions only, for more details refer to the tripadvisor page on the right</em>):</p>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Carleton Martello Tower',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Historic Sites&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Land Marks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d294366-Reviews-Carleton_Martello_Tower-Saint_John_New_Brunswick.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Carleton+Martello+Tower+National+Historic+Park/@45.251527,-66.0790194,17z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b4f47c916c55:0x98287c8a7c72700!8m2!3d45.2515232!4d-66.0768254?hl=en">454 Whipple St, Saint John, NB</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 30 mins</p>  ',
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
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Waterfall&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature Parks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d318433-Reviews-Reversing_Falls-Saint_John_New_Brunswick.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Reversing+Falls/@45.2602293,-66.0988683,15z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b4959817aa3f:0x718dfc6ad823909f!8m2!3d45.2602151!4d-66.0900921?hl=en">Reversing Falls, Saint John, NB</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 30 mins</p>  ',
            slides: [{
                image: '../images/day1/1-5.jpg'
            }, {
                image: '../images/day1/1-6.jpg'
            }, {
                image: '../images/day1/1-7.jpg'
            }, {
                image: '../images/day1/1-8.jpg'
            }]
        }, {
            title: 'Other Things',
            details: '   <p class="col-sm-12"><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d209880-Reviews-Irving_Nature_Park-Saint_John_New_Brunswick.html">Irving Nature Park</a></p>  ' +
                '   <p class="col-sm-12"><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d318435-Reviews-Rockwood_Park-Saint_John_New_Brunswick.html">Rockwood Park</a></p>  ' +
                '   <p class="col-sm-12"><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d2358773-Reviews-Imperial_Theatre-Saint_John_New_Brunswick.html">Imperial Theatre</a></p>  '
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking</strong> - The city is pretty small, so location does not really matter, any hotels on the top list should be fine.</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Booking.com: <a target="_blank" href="http://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM;sid=35bfc12b24e337d34f25b3775fc632ea;dcid=12;class_interval=1&dest_id=-572890&dest_type=city&dtdisc=0&group_adults=2&group_children=0&hlrd=0&hyb_red=0&inac=0&label_click=undef&nha_red=0&no_rooms=1&offset=0&postcard=0&redirected_from_city=0&redirected_from_landmark=0&redirected_from_region=0&review_score_group=empty&room1=A%2CA&sb_price_type=total&score_min=0&src=index&src_elem=sb&ss=Saint%20John%2C%20New%20Brunswick%2C%20Canada&ss_all=0&ss_raw=Saint%20Jo&ssb=empty&sshis=0&">Link</a></li>  ' +
                '       <li>Airbnb: <a target="_blank" href="https://www.airbnb.ca/s/Saint-John--NB?guests=2&ss_id=nhu8f6xj&source=bb&s_tag=F9QbS43R">Link</a></li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12"><strong>Car Rental</strong> - There are several car rental services available at the airport, the prices are similar, just choose the one that has the baby you want</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Expedia: <a target="_blank" href="https://www.expedia.ca/Car-Rentals-In-YSJ.d6000701.Car-Rental-Guide?regionId=6000701&kword=saint_john_airport_car_rental!e.ZzZz.4580000121376.0.108596293033.saint%25252520john%25252520airport%25252520car%25252520rental.saint_john_airport_car_rental&semcid=CA.MULTILOB.GOOGLE.SEARCH.CAR&gclid=CjwKEAjwtqe8BRCs-9DdpMOilBoSJAAyqWz_F-2rCr5oFqHg1h94sKLFFvIoh_GdjjCk85RPS99MlhoCVrvw_wcB">Link</a></li>  ' +
                '       <li>Avis: <a target="_blank" href="https://www.avis.ca/car-rental/avisHome/home.ac?gclid=CjwKEAjwtqe8BRCs-9DdpMOilBoSJAAyqWz_zpMdCYnizs88gOwGwzEaBznenVezc77oKO6KKfGg3BoC46jw_wcB&dclid=CPDCie6p-M0CFRanaQodpi8HuA#">Link</a></li>  ' +
                '       <li>Enterprise:  ' +
                '           <a target="_blank" href="https://www.enterprise.ca/en/home.html">Link</a></li>  ' +
                '  </ul>  ' +
                '<p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.tripadvisor.ca/Restaurants-g154960-Saint_John_New_Brunswick.html">10 Best Resturants in Saint John</a></p>' +
                '   <p class="col-sm-12"><strong>Notes</strong>:</p><br>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>You will need to save some energy for tomorrow so don\'t stay up too late </li>  ' +
                '       <li>The parks are fairly large, my suggestion is to stay in the town, people say the theatre is one of the best in the world, go for a show if you are interested </li>  ' +
                '<li>You need book some of the tours (e.g. whale watching tours, PEI day tours, etc.) before you depart from Toronto, read their sections for details</li>' +
                '  </ul>  '
        }
    }, {
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p>Arrive at Saint John around 1:30pm...</p>  ' +
                '       <p>Things to do after landing:</p>  ' +
                '       <ul>  ' +
                '           <li>Pickup your booked baby from the airport (You can find info about car rental services on the right panel)</li>  ' +
                '           <li>Drive to you hotel and checkin (Info available on the right panel)</li>  ' +
                '       </ul>  ' +
                '       <p>  ' +
                '           It should take you about 30 mins to get from the airport to your hotel, if everything works out as expected, you should be able to officially start your trip around 3:00pm to 3:30pm.  ' +
                '       </p>  ' +
                '       <p>Below are some of the point of interest and the things you can do for the rest o the day (<em>suggestions only, for more details refer to the tripadvisor page on the right</em>):</p>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Carleton Martello Tower',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Historic Sites&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Land Marks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d294366-Reviews-Carleton_Martello_Tower-Saint_John_New_Brunswick.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Carleton+Martello+Tower+National+Historic+Park/@45.251527,-66.0790194,17z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b4f47c916c55:0x98287c8a7c72700!8m2!3d45.2515232!4d-66.0768254?hl=en">454 Whipple St, Saint John, NB</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 30 mins</p>  ',
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
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Waterfall&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature Parks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d318433-Reviews-Reversing_Falls-Saint_John_New_Brunswick.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Reversing+Falls/@45.2602293,-66.0988683,15z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b4959817aa3f:0x718dfc6ad823909f!8m2!3d45.2602151!4d-66.0900921?hl=en">Reversing Falls, Saint John, NB</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 30 mins</p>  ',
            slides: [{
                image: '../images/day1/1-5.jpg'
            }, {
                image: '../images/day1/1-6.jpg'
            }, {
                image: '../images/day1/1-7.jpg'
            }, {
                image: '../images/day1/1-8.jpg'
            }]
        }, {
            title: 'Other Things',
            details: '   <p class="col-sm-12"><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d209880-Reviews-Irving_Nature_Park-Saint_John_New_Brunswick.html">Irving Nature Park</a></p>  ' +
                '   <p class="col-sm-12"><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d318435-Reviews-Rockwood_Park-Saint_John_New_Brunswick.html">Rockwood Park</a></p>  ' +
                '   <p class="col-sm-12"><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d2358773-Reviews-Imperial_Theatre-Saint_John_New_Brunswick.html">Imperial Theatre</a></p>  '
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking</strong> - The city is pretty small, so location does not really matter, any hotels on the top list should be fine.</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Booking.com: <a target="_blank" href="http://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM;sid=35bfc12b24e337d34f25b3775fc632ea;dcid=12;class_interval=1&dest_id=-572890&dest_type=city&dtdisc=0&group_adults=2&group_children=0&hlrd=0&hyb_red=0&inac=0&label_click=undef&nha_red=0&no_rooms=1&offset=0&postcard=0&redirected_from_city=0&redirected_from_landmark=0&redirected_from_region=0&review_score_group=empty&room1=A%2CA&sb_price_type=total&score_min=0&src=index&src_elem=sb&ss=Saint%20John%2C%20New%20Brunswick%2C%20Canada&ss_all=0&ss_raw=Saint%20Jo&ssb=empty&sshis=0&">Link</a></li>  ' +
                '       <li>Airbnb: <a target="_blank" href="https://www.airbnb.ca/s/Saint-John--NB?guests=2&ss_id=nhu8f6xj&source=bb&s_tag=F9QbS43R">Link</a></li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12"><strong>Car Rental</strong> - There are several car rental services available at the airport, the prices are similar, just choose the one that has the baby you want</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Expedia: <a target="_blank" href="https://www.expedia.ca/Car-Rentals-In-YSJ.d6000701.Car-Rental-Guide?regionId=6000701&kword=saint_john_airport_car_rental!e.ZzZz.4580000121376.0.108596293033.saint%25252520john%25252520airport%25252520car%25252520rental.saint_john_airport_car_rental&semcid=CA.MULTILOB.GOOGLE.SEARCH.CAR&gclid=CjwKEAjwtqe8BRCs-9DdpMOilBoSJAAyqWz_F-2rCr5oFqHg1h94sKLFFvIoh_GdjjCk85RPS99MlhoCVrvw_wcB">Link</a></li>  ' +
                '       <li>Avis: <a target="_blank" href="https://www.avis.ca/car-rental/avisHome/home.ac?gclid=CjwKEAjwtqe8BRCs-9DdpMOilBoSJAAyqWz_zpMdCYnizs88gOwGwzEaBznenVezc77oKO6KKfGg3BoC46jw_wcB&dclid=CPDCie6p-M0CFRanaQodpi8HuA#">Link</a></li>  ' +
                '       <li>Enterprise:  ' +
                '           <a target="_blank" href="https://www.enterprise.ca/en/home.html">Link</a></li>  ' +
                '  </ul>  ' +
                '<p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.tripadvisor.ca/Restaurants-g154960-Saint_John_New_Brunswick.html">10 Best Resturants in Saint John</a></p>' +
                '   <p class="col-sm-12"><strong>Notes</strong>:</p><br>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>You will need to save some energy for tomorrow so don\'t stay up too late </li>  ' +
                '       <li>The parks are fairly large, my suggestion is to stay in the town, people say the theatre is one of the best in the world, go for a show if you are interested </li>  ' +
                '<li>You need book some of the tours (e.g. whale watching tours, PEI day tours, etc.) before you depart from Toronto, read their sections for details</li>' +
                '  </ul>  '
        }
    }]);