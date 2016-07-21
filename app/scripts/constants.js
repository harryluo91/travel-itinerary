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
                image: 'images/day1/1-1.jpg'
            }, {
                image: 'images/day1/1-2.jpg'
            }, {
                image: 'images/day1/1-3.jpg'
            }, {
                image: 'images/day1/1-4.jpg'
            }]
        }, {
            title: 'Reversing Falls',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Waterfall&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature Parks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154960-d318433-Reviews-Reversing_Falls-Saint_John_New_Brunswick.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Reversing+Falls/@45.2602293,-66.0988683,15z/data=!3m1!4b1!4m5!3m4!1s0x4ca7b4959817aa3f:0x718dfc6ad823909f!8m2!3d45.2602151!4d-66.0900921?hl=en">Reversing Falls, Saint John, NB</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 30 mins</p>  ',
            slides: [{
                image: 'images/day1/1-5.jpg'
            }, {
                image: 'images/day1/1-6.jpg'
            }, {
                image: 'images/day1/1-7.jpg'
            }, {
                image: 'images/day1/1-8.jpg'
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
                '       <p><strong>Day Summary</strong></p>  ' +
                '       <p>You will be driving to Hopewell Rocks today, spend about 1 or 2 hours there and head directly to Charlottetown for the night</p>  ' +
                '       <p>So the only real attraction you will be visiting today is the Canada\'s most famous rocks: ) </p>  ' +
                '       <p>Get up before noon...</p>  ' +
                '       <p>There is going to be a lot of driving today, probably a bit boring, so have a nice breakfast ans stock up your snacks before you leave.</p>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Hopewell Rocks',
            details: '   <p class="col-sm-12">Driving Time From Saint John: 1 hour 56 mins</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Geologic Formations&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g499179-d217959-Reviews-Hopewell_Rocks-Hopewell_Cape_Albert_County_New_Brunswick.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Hopewell+Rocks/@45.8449344,-64.5690536,13.36z/data=!4m5!3m4!1s0x0:0xa76b1db3009b3f3b!8m2!3d45.8231023!4d-64.578613?hl=en">Hopewell Rocks, NB</a></p>  ' +
                '   <p class="col-sm-12">Suggested Duration: 1 - 2 hours</p>  ' +
                '  <p class="col-sm-12">Notes: can get very crowded depending on the day, go early if you wanna take good photos</p>  ',
            slides: [{
                image: 'images/day2/2-1.jpg'
            }, {
                image: 'images/day2/2-2.jpg'
            }, {
                image: 'images/day2/2-3.jpg'
            }, {
                image: 'images/day2/2-4.jpg'
            }]
        }, {
            title: 'Road to Charlottetown',
            details: '   <p class="col-sm-12">Driving Time From Hopewell Rocks: 2 h 25 min</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Geologic Formations&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature & Parks&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Landmarks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attractions-g155023-Activities-Charlottetown_Prince_Edward_Island.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/Hopewell+Rocks,+ch.+Discovery+Road,+Hopewell+Cape,+NB/Charlottetown,+PE/@46.0499584,-64.5210624,9z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4b5f5547c5d10a87:0xa76b1db3009b3f3b!2m2!1d-64.5786152!2d45.8230989!1m5!1m1!1s0x4b5e52ddd47f83c5:0x5a5777b89f519b27!2m2!1d-63.1310704!2d46.23824?hl=en">Road to Charlottetown</a></p>  ' +
                '   <p class="col-sm-12">Notes for the trip:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>You will be passing the <strong>Confederation Bridge</strong>, you probably want to spend 20 mins check it out and take some photos.</li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12">Places to checkout in Charlottetown for the rest of the day:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Victoria Park (the photo with lighthosue)</li>  ' +
                '       <li>St Dunstan\'s Basilica (the other church like photo)</li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day2/2-5.jpg'
            }, {
                image: 'images/day2/2-6.jpg'
            }, {
                image: 'images/day2/2-7.jpg'
            }, {
                image: 'images/day2/2-8.jpg'
            }]
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking</strong> - The city is pretty small, so location does not really matter, any hotels on the top list should be fine.</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Booking.com: <a target="_blank" href="http://www.booking.com/searchresults.html?dcid=12&label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM&sid=35bfc12b24e337d34f25b3775fc632ea&sb=1&src=searchresults&src_elem=sb&error_url=http%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM%3Bsid%3D35bfc12b24e337d34f25b3775fc632ea%3Bdcid%3D12%3Bcity%3D-572890%3Bclass_interval%3D1%3Bdest_id%3D4781%3Bdest_type%3Dregion%3Bdtdisc%3D0%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Bhlrd%3D0%3Bhyb_red%3D0%3Binac%3D0%3Blabel_click%3Dundef%3Bnha_red%3D0%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Bredirected_from_city%3D0%3Bredirected_from_landmark%3D0%3Bredirected_from_region%3D0%3Breview_score_group%3Dempty%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bscore_min%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bss%3DCape%2520Breton%252C%2520Canada%3Bss_all%3D0%3Bss_raw%3Dcape%2520breton%3Bssb%3Dempty%3Bsshis%3D0%3Bssne_untouched%3DSaint%2520John%26%3B&ss=Charlottetown%2C+Prince+Edward+Island%2C+Canada&ssne=Cape+Breton&ssne_untouched=Cape+Breton&room1=A%2CA&no_rooms=1&group_adults=2&group_children=0&ss_raw=charl&ac_position=3&ac_langcode=en&dest_id=-562447&dest_type=city&ac_pageview_id=fdcc7678b3eb0241&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">Link</a></li>  ' +
                '       <li>Airbnb: <a target="_blank" href="https://www.airbnb.ca/s/Charlottetown--PE?guests=2&ss_id=v5mo47i2&s_tag=vmc1Ki94">Link</a></li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.tripadvisor.ca/Restaurants-g155023-Charlottetown_Prince_Edward_Island.html">10 Best Resturants in Charlottetown</a></p>  ' +
                '  <p class="col-sm-12"><strong>Notes</strong>:</p>  '
        }
    }, {
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p><strong>Day Summary</strong></p>  ' +
                '       <p>You have two choices:</p>  ' +
                '       <ul>  ' +
                '           <li>Book a day tour, there are many types of tours, see the general info section for details</li>  ' +
                '           <li>Drive around the island by yourself, stop at anywhere that interests you</li>  ' +
                '       </ul>  ' +
                '       <p>The PEI tours have some great positive comments, it\'s the easiest way to explore the island, I would recommend to take one of the boat tours. </p>  ' +
                '       <p>If you prefer to be an adventurer, here are some of the places you can go:</p>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Green Gables',
            details: '  <p class="col-sm-12"><strong>Dont\'t go here if you have never heard of "Anne of Green Gables"</strong></p>  ' +
                '   <p class="col-sm-12">Driving Time From Charlottetown: 38 min</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Landmarks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g499311-d186971-Reviews-Green_Gables-Cavendish_Prince_Edward_Island.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Green+Gables/@46.3647069,-63.3971328,11z/am=t/data=!4m21!1m15!4m14!1m6!1m2!1s0x4b5e52ddd47f83c5:0x5a5777b89f519b27!2sCharlottetown,+PE!2m2!1d-63.1310704!2d46.23824!1m6!1m2!1s0x4b5e52b88069165d:0xe5546936725340c6!2sGreen+Gables,+8619+Cavendish+Rd,+Cavendish,+PE+C0A+1M0!2m2!1d-63.3823395!2d46.4884229!3m4!1s0x4b5e52b88069165d:0xe5546936725340c6!8m2!3d46.4884229!4d-63.3823395?hl=en">Green Gables, 8619 Cavendish Road, Cavendish, PE C0A 1M0</a></p>  ' +
                '   <p class="col-sm-12">Suggested Duration: 20 min</p>  ' +
                '   <p class="col-sm-12">Hours: 9:00am - 5:00pm</p>  ',
            slides: [{
                image: 'images/day3/3-1.jpg'
            }]
        }, {
            title: 'Cavendish Beach and PEI National Park',
            details: '   <p class="col-sm-12">Driving Time From Charlottetown: 40 min</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g155022-d155789-Reviews-Prince_Edward_Island_National_Park-Prince_Edward_Island.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Cavendish,+PE/@46.4912749,-63.3874502,15z/am=t/data=!3m1!4b1!4m5!3m4!1s0x4b5fbf9f119031fd:0xa6378ec95c4735db!8m2!3d46.491261!4d-63.378674?hl=en">Cavendish, PE</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 2 - 3 h</p>  ',
            slides: [{
                image: 'images/day3/3-2.jpg'
            }, {
                image: 'images/day3/3-3.jpg'
            }, {
                image: 'images/day3/3-4.jpg'
            }]
        }, {
            title: 'Other Things',
            details: '   <p class="col-sm-12">There are so many parks, beaches and lighthouses in PEI, driving along the Cavendish shore should let you experience a little bit of everything. (Part of the road looks like Highway 1, the more ghetto version ofcourse)</p>  ' +
                '   <p class="col-sm-12"><a target="_blank" href="https://www.google.ca/maps/dir/46.4051401,-63.065081/46.4285781,-63.1979479/North+Rustico/46.4988314,-63.3745256/@46.443812,-63.2930576,12z/am=t/data=!3m1!4b1!4m11!4m10!1m0!1m0!1m5!1m1!1s0x4b5fb8c3e64e9b43:0xcb056f134dc5f4dc!2m2!1d-63.3131925!2d46.4582755!1m0!3e0?hl=en">Directions</a></p>  ' +
                '  <p class="col-sm-12">There are also farms, museums and haunted house around the area, check the details page and pick what you like: <a target="_blank" href="https://www.tripadvisor.ca/Attractions-g155022-Activities-Prince_Edward_Island.html">Link</a></p>  '
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12">You will stay at Charlottetwon again, refer to the previous section for general information</p>  ' +
                '   <p class="col-sm-12">Tour Booking:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li><a target="_blank" href="https://www.tripadvisor.ca/Attractions-g155022-Activities-c42-Prince_Edward_Island.html">Top tours in PEI</a></li>  ' +
                '       <li><a target="_blank" href="http://www.peitunacharters.com/">PEI tuna catching private tour (pretty pricey)</a> - my friend just went on this, it looks pretty fun.</li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12"><em>My suggestion is take a half day boat tour and spend the afternoon at the north beach to catch the sunset.</em></p>  ' +
                '   <p class="col-sm-12"><strong>Notes</strong>:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Make sure you get enough sleep, there will be 5 - 6 hours of driving tomorrow.</li>  ' +
                '       <li>You will need to take a ferry to enter Nova Scotia tomorrow, please check the ferry schedule below. Also, it is better to book with the ferry comapny before hand since you have a car, space may be limited.  ' +
                '           <ul>  ' +
                '               <li><a target="_blank" href="http://www.ferries.ca/ns-pei-ferry/schedule/">Ferry Schedule</a></li>  ' +
                '           </ul>  ' +
                '       </li>  ' +
                '  </ul>  '
        }
    }, {
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p><strong>Day Summary</strong></p>  ' +
                '       <ul>  ' +
                '           <li>Today is going to be a long and less interesting day...</li>  ' +
                '           <li>You will take the ferry wit your baby to cross the sea and enter the land of Nova Scotia</li>  ' +
                '           <li>You will then drive about 3 hours to the second best Sydney in the world - Sydney, NS.</li>  ' +
                '           <li>There are some intersting places to explore north of the city, you can spend the rest of the day visiting some of those places</li>  ' +
                '           <li>Rest well, you will be visiting one of the most beautiful parks tomorow :)</li>  ' +
                '       </ul>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Road to Sydney',
            details: '   <p class="col-sm-12">Travelling Time From Charlottetown: 5 h 21 min</p>  ' +
                '  <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/Charlottetown,+PE/Sydney,+NS/@45.825773,-63.3615899,8z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4b5e52ddd47f83c5:0x5a5777b89f519b27!2m2!1d-63.1310704!2d46.23824!1m5!1m1!1s0x4b67fb367e723415:0xa783539b7b308087!2m2!1d-60.194224!2d46.1367899?hl=en">Charlottetown - Sydney</a></p>  '
        }, {
            title: 'Around Sydney - Louisbourg',
            details: '   <p class="col-sm-12">Time from Sydney: 29 min</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Geologic Formations&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/Sydney,+NS/Louisbourg,+NS/@46.0289925,-60.2196722,11z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4b67fb367e723415:0xa783539b7b308087!2m2!1d-60.194224!2d46.1367899!1m5!1m1!1s0x4b681d548cc3216d:0x542178588b5ea4dd!2m2!1d-59.9713119!2d45.9221352">Louisbourg</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 30 min to 1 hour</p>  ',
            slides: [{
                image: 'images/day4/4-1.jpg'
            }]
        }, {
            title: 'Around Sydney - Dominion Beach',
            details: '   <p class="col-sm-12">Time from Sydney: 22 min</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Geologic Formations&nbsp;&nbsp;<i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/Sydney,+NS/Dominion+Beach+Provincial+Park,+Nova+Scotia/@46.184019,-60.1888447,12z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4b67fb367e723415:0xa783539b7b308087!2m2!1d-60.194224!2d46.1367899!1m5!1m1!1s0x4b67e12ecf48d0b5:0x7cc6506b7caccd01!2m2!1d-60.0407417!2d46.2216041"> Dominion Beach Provincial Park</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 30 min to 1 hour</p>  ',
            slides: [{
                image: 'images/day4/4-2.jpg'
            }]
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking (1 night)</strong> - The city is pretty small, so location does not really matter, any hotels on the top list should be fine.</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Booking.com: <a target="_blank" href="http://www.booking.com/searchresults.html?dcid=4&label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM&sid=35bfc12b24e337d34f25b3775fc632ea&sb=1&src=searchresults&src_elem=sb&error_url=http%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM%3Bsid%3D35bfc12b24e337d34f25b3775fc632ea%3Bdcid%3D4%3Bclass_interval%3D1%3Bdest_id%3D-562447%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Bhlrd%3D0%3Bhyb_red%3D0%3Binac%3D0%3Blabel_click%3Dundef%3Bnha_red%3D0%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Bredirected_from_city%3D0%3Bredirected_from_landmark%3D0%3Bredirected_from_region%3D0%3Breview_score_group%3Dempty%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bscore_min%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bss%3DCharlottetown%252C%2520Prince%2520Edward%2520Island%252C%2520Canada%3Bss_all%3D0%3Bss_raw%3Dcharl%3Bssb%3Dempty%3Bsshis%3D0%3Bssne_untouched%3DCape%2520Breton%26%3B&ss=Sydney%2C+Nova+Scotia%2C+Canada&ssne=Charlottetown&ssne_untouched=Charlottetown&city=-562447&room1=A%2CA&no_rooms=1&group_adults=2&group_children=0&ss_raw=syd&ac_position=4&ac_langcode=en&dest_id=-574457&dest_type=city&ac_pageview_id=195185d985020004&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">Link</a></li>  ' +
                '       <li>Airbnb: <a target="_blank" href="https://www.airbnb.ca/s/Sydney--NS?guests=2&ss_id=gzy27b0g&s_tag=cPivXafq">Link</a></li>  ' +
                '   </ul>  ' +
                '  <p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.yelp.ca/search?cflt=restaurants&find_loc=Sydney%2C+NS">10 Best Resturants in Sydney</a></p>  '
        }
    }, {
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p><strong>Day Summary</strong></p>  ' +
                '       <p><strong>CAPE BRETON ISLAND!</strong></p>  ' +
                '       <ul>  ' +
                '           <li>Again, there are some choices available, you can either choose a day tour, kayak tour, star gazing tour or romantic tour</li>  ' +
                '           <li>Or, you can just drive along the Canadian version of Highway 1 - Cabot Trail and hike all the famous trails in the park</li>  ' +
                '       </ul>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'The Cabot Trail & Cape Breton Highlands National Park',
            details: '   <p class="col-sm-12">The cabot trail is the road that wraps around the entire Cape Breton Island, the east and west coastal sections of the trail have some breath taking views. There are also many smaller hiking trails, beaches, and other point if interests along the way</p>  ' +
                '   <p class="col-sm-12">Details Page (find trails to hike here):  ' +
                '       <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g499216-d186976-Reviews-Cape_Breton_Highlands_National_Park-Ingonish_Cape_Breton_Island_Nova_Scotia.html">Link</a>  ' +
                '  </p>  ',
            slides: [{
                image: 'images/day5/5-1.png'
            }]
        }, {
            title: 'Cabot Trail - Ingonish',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Ingonish,+NS/@46.7095018,-60.3768702,15z/am=t/data=!3m1!4b1!4m5!3m4!1s0x4b6654b3f22bc879:0xf352cb090fe2366f!8m2!3d46.7095005!4d-60.3680706">Ingonish</a></p>  ' +
                '   <p class="col-sm-12">Suggested Duration: 1 hour to 2 hours</p>  ' +
                '   <p class="col-sm-12">Things to see:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g499216-d7196077-Reviews-Ingonish_Beach-Ingonish_Cape_Breton_Island_Nova_Scotia.html">Ingonish Beach</a></li>  ' +
                '       <li><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g499216-d4596908-Reviews-Middle_Head_Trail-Ingonish_Cape_Breton_Island_Nova_Scotia.html">Middle Head Trail</a></li>  ' +
                '       <li><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g499216-d4596907-Reviews-Chutes_Mary_Ann_Falls-Ingonish_Cape_Breton_Island_Nova_Scotia.html">Chutes Mary Ann Falls</a></li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day5/5-2.jpg',
            }, {
                image: 'images/day5/5-3.jpg',
            }, {
                image: 'images/day5/5-4.jpg',
            }]
        }, {
            title: 'Cabot Trail - Neil\'s Harbour',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Neils+Harbour,+NS/@46.8112402,-60.3412697,15z/data=!4m18!1m12!4m11!1m3!2m2!1d-60.3506467!2d46.8148675!1m6!1m2!1s0x4b6657d2e08b97d1:0x958ec81309361a90!2sNeils+Harbour,+NS!2m2!1d-60.321078!2d46.808906!3m4!1s0x4b6657d2e08b97d1:0x958ec81309361a90!8m2!3d46.8089895!4d-60.3211212">Neil\'s Harbour </a></p > ' +
                '   <p class="col-sm-12">Suggested Duration: 20 min</p>  ' +
                '   <p class="col-sm-12">Things to see:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g499216-d7196077-Reviews-Ingonish_Beach-Ingonish_Cape_Breton_Island_Nova_Scotia.html">Lighthouse Ice Cream Parlour</a></li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day5/5-5.jpg',
            }]
        }, {
            title: 'Cabot Trail - Pleasant Bay',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Pleasant+Bay,+NS/@46.8230898,-60.8086322,15z/data=!3m1!4b1!4m5!3m4!1s0x4b66e1e0113fec8d:0x1d258a5669e4b5c5!8m2!3d46.8230865!4d-60.7998848">Pleasant Bay</a></p>  ' +
                '   <p class="col-sm-12">Suggested Duration: 10 - 20 min</p>  ' +
                '   <p class="col-sm-12">Notes:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Washroom breaks + buy supplies</li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day5/5-6.png',
            }]
        }, {
            title: 'Cabot Trail - Skyline Trail',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Must See</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/46.761703,-60.8344146/46.7459137,-60.9130355/@46.7454681,-60.9024242,13z/am=t/data=!3m1!4b1!4m2!4m1!3e2">Skyline Trail</a></p>  ' +
                '   <p class="col-sm-12">Suggested Duration: 2 - 3 hour</p>  ' +
                '   <p class="col-sm-12">Notes:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Two paths are available, depending on the time and your energy, choose the one that best suits, you will see the most beautiful part of the trail in both the of the paths</li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day5/5-7.png',
            }, {
                image: 'images/day5/5-8.png',
            }]
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12">Depeding on the time of the day and your energy level, you can find a motel alone the cabot trail to spend your night or drive 3 hours to New Glasgow. If you choose to stay for the night, you will have to drive 5 hours tomorrow to get to Halifax.</p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking (1 night)</strong> - The city is pretty small, so location does not really matter, any hotels on the top list should be fine.</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Cabot Trail: <a target="_blank" href="http://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM;sid=35bfc12b24e337d34f25b3775fc632ea;dcid=12;city=-574457;class_interval=1;dest_id=4793;dest_type=region;dtdisc=0;group_adults=2;group_children=0;hlrd=0;hyb_red=0;inac=0;label_click=undef;nha_red=0;no_rooms=1;offset=0;postcard=0;qrhpp=2143d6068b8315c64726bc8393979306-region-0;redirected_from_city=0;redirected_from_landmark=0;redirected_from_region=0;review_score_group=empty;room1=A%2CA;sb_price_type=total;score_min=0;src=searchresults;src_elem=sb;ss=cabot+trail;ss_all=0;ss_raw=co;ssb=empty;sshis=0;srpos=1;origin=search">Link</a></li>  ' +
                '       <li>New Glasgow: <a target="_blank" href="http://www.booking.com/searchresults.html?dcid=12&label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM&sid=35bfc12b24e337d34f25b3775fc632ea&sb=1&src=searchresults&src_elem=sb&error_url=http%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM%3Bsid%3D35bfc12b24e337d34f25b3775fc632ea%3Bdcid%3D12%3Bcity%3D-574457%3Bclass_interval%3D1%3Bdest_id%3D4793%3Bdest_type%3Dregion%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Bhlrd%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Breview_score_group%3Dempty%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bscore_min%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bss%3Dcabot%2520trail%3Bss_raw%3Dco%3Bssb%3Dempty%26%3B&ss=New+Glasgow%2C+Nova+Scotia%2C+Canada&ssne=Cabot+Trail&ssne_untouched=Cabot+Trail&room1=A%2CA&no_rooms=1&group_adults=2&group_children=0&ss_raw=new+glasgow&ac_position=0&ac_langcode=en&dest_id=-570106&dest_type=city&ac_pageview_id=89759a0ec7c5002f&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">Link</a></li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.yelp.ca/search?find_desc=Restaurants&find_loc=Cabot+Trail,+Pleasant+Bay,+NS+B0E+2P0">Resturants along the trail</a></p>  ' +
                '  <p class="col-sm-12">Map to New Glasgow: <a target="_blank" href="https://www.google.ca/maps/dir/Petit+%C3%89tang/New+Glasgow/@46.0029848,-62.9269776,8z/am=t/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4b6716cef7c07c09:0x732b3b8015e3d6d!2m2!1d-60.966667!2d46.65!1m5!1m1!1s0x4b5c1ead6eb686d7:0x502581ef8cf0660!2m2!1d-62.6451191!2d45.5871702!3e0">Link</a></p>  '
        }
    }, {
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p><strong>Day Summary</strong></p>  ' +
                '       <p><strong>Halifax and Peggy\'s Cove</strong></p>  ' +
                '       <ul>  ' +
                '           <li>Whether you stayed at Cape Breton or New Glasgow last night, you should be able to get Halifax around noon.</li>  ' +
                '           <li>Take a nap and ready to visit the famous Peggy\'s Cove that has made its name to many megazines\' must see places around the world! (I did not know it was this famous years after left there...)</li>  ' +
                '       </ul>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Peggy\'s Cove',
            details: '   <p class="col-sm-12">Time from Halifax: 1 hour</p><p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Must See</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/Dartmouth,+NS/Peggys+Cove,+NS/@44.6325387,-63.913889,11z/data=!4m13!4m12!1m5!1m1!1s0x4b5a23ddf20334b3:0xda5007be195731e7!2m2!1d-63.5677427!2d44.6652059!1m5!1m1!1s0x4b5a02e9d854b0e5:0x6b8306124c808566!2m2!1d-63.9125577!2d44.4934044">Peggy\'s Cove</a></p>  ' +
                '   <p class="col-sm-12">Suggested Duration: 1 hour</p>  ' +
                '   <p class="col-sm-12">Notes:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>You probbaly want to catch the sunset over there</li>  ' +
                '       <li>There\'s a store that allows you to mail postcards, I actually wanted to mail you one but I did not know your address...</li>  ' +
                '       <li>Get back before dark, I think some of the roads don\'t have lights, and choose a different route to drive back if you don\'t like to travel the same route like me.</li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day6/6-1.png'
            }, {
                image: 'images/day6/6-2.png'
            }, {
                image: 'images/day6/6-3.png'
            }, {
                image: 'images/day6/6-4.png'
            }]
        }, {
            title: 'The City of Halifax',
            details: '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>City</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Halifax,+NS/@44.6493313,-63.692186,12z/data=!3m1!4b1!4m5!3m4!1s0x4b5a211407dbfac1:0x666be3a6438b2ddc!8m2!3d44.6488625!4d-63.5753196">Halifax, NS</a></p>  ' +
                '   <p class="col-sm-12">Things to see:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li><a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g154976-d185440-Reviews-Halifax_Public_Gardens-Halifax_Halifax_Region_Nova_Scotia.html">Halifax Public Gardens</a></li>  ' +
                '       <li>Base of the Royal Canadian Navy (only has one ghetto ship when I went there...)</li>  ' +
                '       <li>The Harbour Hopper Tours (kind of fun actually)</li>  ' +
                '       <li>Halifax Titanic Historical Tours (recommended by a lot of people, if you are very interested in the city\'s history and ofcourse, Titanic)</li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day6/6-5.jpg',
            }, {
                image: 'images/day6/6-6.png',
            }]
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking (1 night)</strong></p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Booking.com: <a target="_blank" href="http://www.booking.com/searchresults.html?dcid=12&label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM&sid=35bfc12b24e337d34f25b3775fc632ea&sb=1&src=searchresults&src_elem=sb&error_url=http%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM%3Bsid%3D35bfc12b24e337d34f25b3775fc632ea%3Bdcid%3D12%3Bclass_interval%3D1%3Bdest_id%3D-570106%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Bhlrd%3D0%3Bhyb_red%3D0%3Binac%3D0%3Blabel_click%3Dundef%3Bnha_red%3D0%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Bredirected_from_city%3D0%3Bredirected_from_landmark%3D0%3Bredirected_from_region%3D0%3Breview_score_group%3Dempty%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bscore_min%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bss%3DNew%2520Glasgow%252C%2520Nova%2520Scotia%252C%2520Canada%3Bss_all%3D0%3Bss_raw%3Dnew%2520glasgow%3Bssb%3Dempty%3Bsshis%3D0%3Bssne_untouched%3DCabot%2520Trail%26%3B&ss=halifax&ssne=New+Glasgow&ssne_untouched=New+Glasgow&city=-570106&room1=A%2CA&no_rooms=1&group_adults=2&group_children=0&ss_raw=halifax&dest_id=&dest_type=">Link</a></li>  ' +
                '       <li>Airbnb: <a target="_blank" href="https://www.airbnb.ca/s/Halifax--NS?guests=2&ss_id=tjs9k9ps&s_tag=pCYoRApr">Link</a></li>  ' +
                '   </ul>  ' +
                '  <p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.tripadvisor.ca/Restaurants-g154976-Halifax_Halifax_Region_Nova_Scotia.html">10 Best Resturants in Halifax</a></p>  '
        }
    }, {
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p><strong>Day Summary</strong></p>  ' +
                '       <p><strong>Halifax and Yarmouth</strong></p>  ' +
                '       <ul>  ' +
                '           <li>You will probably be very tired from all the driving and hiking during the past few days, rest well until you are ready to go</li>  ' +
                '           <li>Continue to explore the city of Halifax if you did not get a lot of time yesterday, this is actually a very interesting city</li>  ' +
                '           <li>You will be spending your night at Yarmouth today, there are not many things to see there so don\'t rush, as long as you get there before dark.</li>  ' +
                '       </ul>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Yarmouth',
            details: '   <p class="col-sm-12">Time from Halifax: 3 hours</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>City</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/Halifax,+NS/Yarmouth,+NS/@44.3321242,-65.9910412,8z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4b5a211407dbfac1:0x666be3a6438b2ddc!2m2!1d-63.5753196!2d44.6488625!1m5!1m1!1s0x4b561107161eff55:0x502581ef9005160!2m2!1d-66.117382!2d43.8374576?hl=en">Yarmouth, NS</a></p>  ' +
                '   <p class="col-sm-12">Things to see:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li><a target="_blank" href="https://www.google.ca/maps/dir/Yarmouth,+NS/Cape+Forchu+Lightstation,+Yarmouth,+NS/@43.8233751,-66.1704744,13z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4b561107161eff55:0x502581ef9005160!2m2!1d-66.117382!2d43.8374576!1m5!1m1!1s0x4b560e3394de0b61:0x54ab59f07b927d1a!2m2!1d-66.1552202!2d43.7939483?hl=en">Cape Forchu Lightstation</a></li>  ' +
                '       <li>Yarmouth County Museum and Archives</li>  ' +
                '       <li>Frost Park</li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day7/7-1.jpg'
            }, {
                image: 'images/day7/7-2.jpg'
            }]
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking (1 night)</strong></p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Booking.com: <a target="_blank" href="http://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQPoAQH4AQKoAgM;sid=35bfc12b24e337d34f25b3775fc632ea;dcid=12;class_interval=1&dest_id=-576271&dest_type=city&dtdisc=0&group_adults=2&group_children=0&hlrd=0&hyb_red=0&inac=0&label_click=undef&nha_red=0&no_rooms=1&offset=0&postcard=0&redirected_from_city=0&redirected_from_landmark=0&redirected_from_region=0&review_score_group=empty&room1=A%2CA&sb_price_type=total&score_min=0&src=index&src_elem=sb&ss=Yarmouth%2C%20Nova%20Scotia%2C%20Canada&ss_all=0&ss_raw=yarmouth&ssb=empty&sshis=0&traveller=other&">Link</a></li>  ' +
                '       <li>Airbnb: <a target="_blank" href="https://www.airbnb.ca/s/Yarmouth--NS?guests=2&ss_id=7694o87o&s_tag=FnhVv-6k">Link</a></li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.tripadvisor.ca/Restaurants-g181761-Yarmouth_Southwest_Nova_Scotia_Nova_Scotia.html">10 Best Resturants in Yarmouth</a></p>  ' +
                '   <p class="col-sm-12">Notes:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>You will be on a whale watching trip tomorrow, make sure to book it!</li>  ' +
                '       <li>You will also need to take the ferry to go back to Saint John, check the schedule here:  ' +
                '           <a a target="_blank" href="http://www.ferries.ca/nb-ns-ferry/schedule/">Link</a>  ' +
                '       </li>  ' +
                '  </ul>  '
        }
    }, {
        timelineInfo: {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-check',
            dayOverview: '   <div class="col-sm-12">  ' +
                '       <p><strong>Day Summary</strong></p>  ' +
                '       <p><strong>Whales!</strong></p>  ' +
                '       <ul>  ' +
                '           <li>Go watch the whales, 能不能看到就要看你的人品了~</li>  ' +
                '       </ul>  ' +
                '  </div>  '
        },
        pointOfInterest: [{
            title: 'Brier Island Whale Watching Tour',
            details: '   <p class="col-sm-12">Time from Yarmouth: 2 hours 41 mins</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Whale Watching</p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/dir/Yarmouth,+NS/Brier+Island,+Westport,+NS/@44.2218114,-66.6521001,9z/am=t/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4b561107161eff55:0x502581ef9005160!2m2!1d-66.117382!2d43.8374576!1m5!1m1!1s0x4ca9cc3f78e05bb1:0x7154b84f603a3c3b!2m2!1d-66.3682814!2d44.2544294?hl=en">Brier Island, NS</a></p>  ' +
                '   <p class="col-sm-12">Notes:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li><strong>Remeber to wear something warm, it\'s pretty cold and windy on the boat!</strong></li>  ' +
                '  </ul>  ',
            slides: [{
                image: 'images/day8/8-1.jpg'
            }, {
                image: 'images/day8/8-2.png'
            }, {
                image: 'images/day8/8-3.png'
            }]
        }],
        generalInfo: {
            details: '   <p class="col-sm-12">  ' +
                '       <h4>General Information</h4>  ' +
                '   </p>  ' +
                '   <p><strong>Whale watching booking: <a target="_blank" href="http://brierislandwhalewatch.com/">Link</a></strong></p>  ' +
                '   <p><strong>Ferry schedule: <a target="_blank" href="http://www.ferries.ca/nb-ns-ferry/schedule/">Link</a></strong></p>  ' +
                '   <p class="col-sm-12"><strong>Hotel Booking (1 night)</strong></p>  ' +
                '   <p class="col-sm-12">Notes:</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Refer to Day 1 for hotel booking and resturants</li>  ' +
                '  </ul>  '
        }
    }]);