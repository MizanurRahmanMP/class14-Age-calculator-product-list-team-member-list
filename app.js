

// Age Calculator area start

const age_counter = document.getElementById('age-counter');
const counter = document.querySelector('.counter');


age_counter.addEventListener('submit', function(e){

    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;

    let start_time = new Date( date + " " + time );
    let end_time = new Date();

    setInterval(() =>{


        let time_diff = Math.floor(end_time.getTime() - start_time.getTime());

        let total_sec = Math.floor( time_diff / 1000 );
        let total_min = Math.floor( total_sec / 60 );
        let total_hours = Math.floor( total_min / 60 );
        let total_day = Math.floor( total_hours / 24 );
        let total_week = Math.floor( total_day / 7 );
        let total_month = Math.floor( total_day / 30 );
        let total_year = Math.floor( total_month / 12 );

        let month = total_month - ( total_year * 12 );
        let day = total_day - ( total_year * 12 * 30 ) - ( month * 30 );

        counter.innerHTML = ` 
        
        Age : <br> Total year: ${ total_year } <br> Total Month: ${ total_month } <br> Total Week: ${ total_week } <br> Total day: ${ total_day } <br> Total hours: ${ total_hours } <br> Total nin: ${ total_min } <br> Total sec: ${ total_sec }
        
        `;


    }, 1000);

});

// Age Calculator area end





// Team member get element area start

const devs_form = document.getElementById('devs_form');
const devs_area = document.querySelector('.devs-area');


// Team member function area start
devs_form.addEventListener('submit', function(e){

    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let photo = this.querySelector('input[name="photo"]');

    skills_arr = [];

    for( let i = 0; i < skill.length; i ++ ){

        skills_arr.push(skill[i].value);

        
    };

    let data_arr;
    if(dataGet('devs')){

        data_arr = dataGet('devs');
    }else{
        data_arr = [];
    };

    data_arr.push({
        name   : name.value,
        gender : gender.value,
        skills : skills_arr,
        photo  : photo.value
    });

    dataSend('devs', data_arr);

    alldevs();
});



alldevs();

function alldevs(){
    let all_devs = dataGet('devs');
    let data = '';
    
    all_devs.map( d =>{

    let dskill = '';

        d.skills.map((dd) => {
            dskill += '<li class="list-group-item dskill">' + dd + '</li>'
        });

        data += `
        
        <div class="col-md-4 my-3">
            <div class="card data_card">
                <img style="width: 100%; height: 250px; object-fit: cover;" class="card-img" src="${ d.photo }" alt="">
                 <div class="card-body card_data">
                     <h3>${ d.name }</h3>
                    <h6>Gender : ${ d.gender }</h6>
                    <hr>
                    <h4>Skills : </h4>
                    <hr>
                    <ul class="list-group">
                         <h6> ${dskill} </h6>
                    </ul>
                </div>
            </div>
        </div>


        `;
    });

    devs_area.innerHTML = data;
};

// Team member function area end


// Team member list area end

