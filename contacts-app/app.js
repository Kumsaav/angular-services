var app = angular.module("contactApp", []);
app.controller("contactCtrl", contactCtrl);

app.controller("HeaderCtrl", headerCtrl);

app.controller("FooterCtrl", footerCtrl);

app.constant("appObjSvc", {
    "Title" : "My Contact App",
    "Author" : "Saurav",
    "version" : "1.0" 
});

app.value("appTitleSvc", "My New Contact Application");
// app.value("appObjFunc", prepareConfig());

app.value ("ApplicationNameSvc", "My New Contacts App");

function prepareConfig(ApplicationNameSvc){
    var obj = {};
    obj.name = ApplicationNameSvc;
    obj.age = "34";
    return obj;
}

function AppConfig(appTitleSvc){
     this.name = appTitleSvc;
     this.title = "Something";
}

app.factory("appDataObjFactory", prepareConfig); // prepareConfig();
app.service("appDataServiceSvc", AppConfig); // new AppConfig();

/*app.factory("appDataObjFactory", function(){
    return "This is an example of factory service. It can return any object";
});*/

function headerCtrl(appObjSvc, appDataObjFactory, appDataServiceSvc){
    this.appTitle=appObjSvc.Title;
    console.log(appDataObjFactory.name);
    console.log(appDataServiceSvc.name);
   
}

function footerCtrl(appObjSvc){
    this.appTitle=appObjSvc.Title;
   
}

function contactCtrl() {
    this.contacts = [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "viljami",
                "last": "peura"
            },
            "location": {
                "street": "2772 otavalankatu",
                "city": "taipalsaari",
                "state": "pirkanmaa",
                "postcode": 88883
            },
            "email": "viljami.peura@example.com",
            "login": {
                "username": "yellowlion344",
                "password": "ninguna",
                "salt": "iMrhvPMj",
                "md5": "a5d3c93c09d04a1397da249c9625db31",
                "sha1": "6b6c2c0596ff7ee442ace51e1b402e3984e033d7",
                "sha256": "e6f577f4e063bbf3144657a31aa7e34caebd8af1741161ae30bee229679f8065"
            },
            "dob": "1948-04-12 05:29:17",
            "registered": "2015-09-06 08:43:56",
            "phone": "03-176-844",
            "cell": "046-685-90-24",
            "id": {
                "name": "HETU",
                "value": "448-6397"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/20.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
            }
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "eemil",
                "last": "keto"
            },
            "location": {
                "street": "1800 fredrikinkatu",
                "city": "mäntyharju",
                "state": "åland",
                "postcode": 89583
            },
            "email": "eemil.keto@example.com",
            "login": {
                "username": "bigkoala857",
                "password": "sunny1",
                "salt": "WJDAMBHN",
                "md5": "7c5e4a0b72265ba34d87d58293b6728c",
                "sha1": "ac72b4f5feb4b880a6c78a223608ab4cdefc0f63",
                "sha256": "982b3201fdd4f861f03079313c9b753b98938f9a38877f852858724459fa5882"
            },
            "dob": "1982-02-11 23:08:31",
            "registered": "2009-12-26 05:30:57",
            "phone": "05-595-562",
            "cell": "044-456-01-20",
            "id": {
                "name": "HETU",
                "value": "582-377B"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/97.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "charlotte",
                "last": "mills"
            },
            "location": {
                "street": "5737 queen street",
                "city": "inverness",
                "state": "west midlands",
                "postcode": "J96 9XJ"
            },
            "email": "charlotte.mills@example.com",
            "login": {
                "username": "bigpanda283",
                "password": "helmet",
                "salt": "hJCSfJzh",
                "md5": "0f2c24a054c2d7c60ba7dd1c2e15abfa",
                "sha1": "0763019597293248b40aaeae0ccfe6c51c972c21",
                "sha256": "52403536fa8c4e4ede42ef34e4a07f358c895eed18aea5224dbe58cad5937fd9"
            },
            "dob": "1975-07-10 16:41:50",
            "registered": "2013-06-26 22:25:20",
            "phone": "017687 35170",
            "cell": "0707-983-860",
            "id": {
                "name": "NINO",
                "value": "JZ 90 73 94 T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/91.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
            }
        },
        {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "elena",
                "last": "peter"
            },
            "location": {
                "street": "1338 am bahnhof",
                "city": "straubing",
                "state": "bremen",
                "postcode": 99986
            },
            "email": "elena.peter@example.com",
            "login": {
                "username": "beautifulmouse601",
                "password": "chilli",
                "salt": "tonqBOp1",
                "md5": "63bfd018e9bfe87260b0c9b209737a0a",
                "sha1": "4f7151584bf9b2004394d9858c6990e91dc9a689",
                "sha256": "0b7c7befd81ed57f778c6c1bb5c92f77819dad9e7e4e8f69f57da70e12607710"
            },
            "dob": "1986-09-02 21:51:41",
            "registered": "2006-07-27 11:06:24",
            "phone": "0897-1222832",
            "cell": "0173-7612224",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/11.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
            }
        }
    ];

    this.selectContact = function(index){
        this.selectedContact = this.contacts[index];
    }
}