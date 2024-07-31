let employelist = [

    {
        name: "aswin",
        Em_id: 12345,
        address: {
            city_name: "trichy",
            distric: "trichy",
            pinCode: 621209
        },
        hobbies: ["reading", "righiting", "sleeping"]
    },
    {
        name: "raja",
        Em_id: 67890,
        address: {
            city_name: "karur",
            distric: "karur",
            pinCode: 621209
        },
        hobbies: ["eating", "righiting", "sleeping"]
    },
    {
        name: "poja",
        Em_id: 98765,
        address: {
            city_name: "covai",
            distric: "coimbtore",
            pinCode: 621209
        },
        hobbies: ["cycling", "righiting", "sleeping"]
    },
    {
        name: "poja",
        Em_id: 98765,
        address: {
            city_name: "covai",
            distric: "coimbtore",
            pinCode: 621209
        },
        hobbies: ["cycling", "righiting", "sleeping"]
    },
    {
        name: "poja",
        Em_id: 98765,
        address: {
            city_name: "covai",
            distric: "coimbtore",
            pinCode: 621209
        },
        hobbies: ["cycling", "righiting", "sleeping"]
    },
    {
        name: "poja",
        Em_id: 98765,
        address: {
            city_name: "covai",
            distric: "coimbtore",
            pinCode: 621209
        },
        hobbies: ["cycling", "righiting", "sleeping"]
    },
    {
        name: "poja",
        Em_id: 98765,
        address: {
            city_name: "covai",
            distric: "coimbtore",
            pinCode: 621209
        },
        hobbies: ["cycling", "righiting", "sleeping"]
    },
    {
        name: "poja",
        Em_id: 98765,
        address: {
            city_name: "covai",
            distric: "coimbtore",
            pinCode: 621209
        },
        hobbies: ["cycling", "righiting", "sleeping"]
    },

]

// outer box 
let outerbox = document.createElement("div")
outerbox.id = "outerbox"
document.body.append(outerbox)
outerbox.style.border = " 2px solid red"
outerbox.style.padding = " 10px"
outerbox.style.display = " flex"
outerbox.style.flexWrap = "wrap"
outerbox.style.gap = " 5px"
outerbox.style.flexDirection = " row"
outerbox.style.justifyContent = "space-around"

// 
employelist.map( employe =>
    {

    // iner div
    let innerdiv = document.createElement("div")
    innerdiv.id = "innerdiv"
    outerbox.append(innerdiv)
    innerdiv.style.border = "2px black solid"
    innerdiv.style.padding = "10px"
    innerdiv.style.width = "300px"

    // h3 
    let h3 = document.createElement("h3")
    h3.id = "h3"
    innerdiv.append(h3)
    h3.innerHTML = "name:" + employe.name
     // h3 
     let h2 = document.createElement("h3")
     h2.id = "h2"
     innerdiv.append(h2)
    h2.innerHTML = "Employe_ID :" + employe.Em_id

    // address div 
    let adrsdiv = document.createElement("div")
    adrsdiv.id = "innerdiv"
    innerdiv.append(adrsdiv)
    adrsdiv.style.border = " 2px solid blue"
    adrsdiv.style.padding = " 10px"

    // Address
    let addresss = document.createElement("h2")
    addresss.id = "addresss"
    adrsdiv.append(addresss)
    addresss.innerHTML = "Address"
    // Employe_id 
    let cname = document.createElement("h3")
    cname.id = "cname"
    adrsdiv.append(cname)
    cname.innerHTML = "Employe_ID :" + employe.address.city_name
    // distric
    let distric = document.createElement("h3")
    cname.id = "distric"
    adrsdiv.append(distric)
    distric.innerHTML = "Distric :" + employe.address.distric
    // pincode 
    let pincode = document.createElement("h3")
    pincode.id = "distric"
    adrsdiv.append(pincode)
    pincode.innerHTML = "Pincode :" + employe.address.pinCode

    // hobbies 
    let h5 = document.createElement("h3")
    h5.id = "h5"
    innerdiv.append(h5)
    let arrays = employe.hobbies
    let i=0 ;
    for (i=0 ; i<arrays.length; i++)
        {
            h5.innerHTML = "hobbiess :" + arrays
        }
        
    
})
