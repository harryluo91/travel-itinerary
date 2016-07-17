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
                image: '../images/day2/2-1.jpg'
            }, {
                image: '../images/day2/2-2.jpg'
            }, {
                image: '../images/day2/2-3.jpg'
            }, {
                image: '../images/day2/2-4.jpg'
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
                image: '../images/day2/2-5.jpg'
            }, {
                image: '../images/day2/2-6.jpg'
            }, {
                image: '../images/day2/2-7.jpg'
            }, {
                image: '../images/day2/2-8.jpg'
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
                image: '../images/day3/3-1.jpg'
            }]
        }, {
            title: 'Cavendish Beach and PEI National Park',
            details: '   <p class="col-sm-12">Driving Time From Charlottetown: 40 min</p>  ' +
                '   <p class="col-sm-12">Tags: <i class="glyphicon glyphicon-tag"></i>Nature & Parks</p>  ' +
                '   <p class="col-sm-12">Detail Page: <a target="_blank" href="https://www.tripadvisor.ca/Attraction_Review-g155022-d155789-Reviews-Prince_Edward_Island_National_Park-Prince_Edward_Island.html">Link</a></p>  ' +
                '   <p class="col-sm-12">Map <i class="glyphicon glyphicon-map-marker"></i><a target="_blank" href="https://www.google.ca/maps/place/Cavendish,+PE/@46.4912749,-63.3874502,15z/am=t/data=!3m1!4b1!4m5!3m4!1s0x4b5fbf9f119031fd:0xa6378ec95c4735db!8m2!3d46.491261!4d-63.378674?hl=en">Cavendish, PE</a></p>  ' +
                '  <p class="col-sm-12">Suggested Duration: 2 - 3 h</p>  ',
            slides: [{
                image: '../images/day3/3-2.jpg'
            }, {
                image: '../images/day3/3-3.jpg'
            }, {
                image: '../images/day3/3-4.jpg'
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
                '   <p class="col-sm-12"><strong>Hotel Booking</strong> - The city is pretty small, so location does not really matter, any hotels on the top list should be fine.</p>  ' +
                '   <ul class="col-sm-12" style="padding-left:30px">  ' +
                '       <li>Booking.com: <a target="_blank" href="http://www.booking.com/searchresults.html?dcid=12&label=gen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM&sid=35bfc12b24e337d34f25b3775fc632ea&sb=1&src=searchresults&src_elem=sb&error_url=http%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1FCAEoggJCAlhYSDNiBW5vcmVmaCeIAQGYATG4AQfIAQzYAQHoAQH4AQKoAgM%3Bsid%3D35bfc12b24e337d34f25b3775fc632ea%3Bdcid%3D12%3Bcity%3D-572890%3Bclass_interval%3D1%3Bdest_id%3D4781%3Bdest_type%3Dregion%3Bdtdisc%3D0%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Bhlrd%3D0%3Bhyb_red%3D0%3Binac%3D0%3Blabel_click%3Dundef%3Bnha_red%3D0%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Bredirected_from_city%3D0%3Bredirected_from_landmark%3D0%3Bredirected_from_region%3D0%3Breview_score_group%3Dempty%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bscore_min%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bss%3DCape%2520Breton%252C%2520Canada%3Bss_all%3D0%3Bss_raw%3Dcape%2520breton%3Bssb%3Dempty%3Bsshis%3D0%3Bssne_untouched%3DSaint%2520John%26%3B&ss=Charlottetown%2C+Prince+Edward+Island%2C+Canada&ssne=Cape+Breton&ssne_untouched=Cape+Breton&room1=A%2CA&no_rooms=1&group_adults=2&group_children=0&ss_raw=charl&ac_position=3&ac_langcode=en&dest_id=-562447&dest_type=city&ac_pageview_id=fdcc7678b3eb0241&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">Link</a></li>  ' +
                '       <li>Airbnb: <a target="_blank" href="https://www.airbnb.ca/s/Charlottetown--PE?guests=2&ss_id=v5mo47i2&s_tag=vmc1Ki94">Link</a></li>  ' +
                '   </ul>  ' +
                '   <p class="col-sm-12"><strong>Resturants</strong> - <a target="_blank" href="https://www.tripadvisor.ca/Restaurants-g155023-Charlottetown_Prince_Edward_Island.html">10 Best Resturants in Charlottetown</a></p>  ' +
                '  <p class="col-sm-12"><strong>Notes</strong>:</p>  '
        }
    }]);