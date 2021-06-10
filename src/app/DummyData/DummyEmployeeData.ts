import { PeriodicElement } from "../Models/PeriodicElement";

export const columIdAndValue=[{id:'employeeID',value:'employeeID'},
{id:'firstName',value:'firstName'},
{id:'lastName',value:'lastName'},
{id:'dob',value:'dob'},
{id:'address',value:'address'},
{id:'state',value:'state'},
{id:'city',value:'city'},
{id:'departmentName',value:'departmentName'},
{id:'companyName',value:'companyName'},
{id:'details',value:'Details'} ];

export interface State{
  id: number;
    value: string;
    cities: {
        id: number;
        value: string;
    }[];
}

export const stateList:State[]=[
  {id:1,value:'Rajasthan',cities:[{id:1,value:'jaipur'},{id:1,value:'udaipur'},{id:1,value:'jodhpur'}]},
  {id:1,value:'Maharashtra' ,cities:[{id:1,value:'Mumbai'},{id:1,value:'Nashik'},{id:1,value:'Pune'}]},
  {id:1,value:'Gujarat',cities:[{id:1,value:'Ahemdabad'},{id:1,value:'Gandhinagar'},{id:1,value:'Vapi'}]},
  {id:1,value:'Assam',cities:[{id:1,value:'guwahati'}]},{id:1,value:'Karnatak',cities:[{id:1,value:'Udupi'},{id:1,value:'banglore'},{id:1,value:'Belgam'}]}]

export const ELEMENT_DATA: PeriodicElement[] =
[
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 1,
    "firstName": "Blevins",
    "lastName": "Mercer",
    "companyName": "UNEEQ",
    "departmentName": "TECHADE",
    "address": "943 Montgomery Place, 9125",
    "dob": "2016-06-06T06:36:18 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 2,
    "firstName": "Santana",
    "lastName": "Jacobs",
    "companyName": "GLUKGLUK",
    "departmentName": "XYMONK",
    "address": "197 Auburn Place, 9475",
    "dob": "2021-03-07T07:25:55 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 3,
    "firstName": "Shanna",
    "lastName": "Becker",
    "companyName": "TERRASYS",
    "departmentName": "NEXGENE",
    "address": "615 Falmouth Street, 2538",
    "dob": "2018-02-09T02:42:38 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 4,
    "firstName": "Puckett",
    "lastName": "Hendricks",
    "companyName": "JIMBIES",
    "departmentName": "ENJOLA",
    "address": "384 Arkansas Drive, 6508",
    "dob": "2016-05-27T03:44:35 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 5,
    "firstName": "Manning",
    "lastName": "Brock",
    "companyName": "ARCTIQ",
    "departmentName": "EXODOC",
    "address": "215 Catherine Street, 8678",
    "dob": "2018-04-08T02:07:33 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 6,
    "firstName": "Carol",
    "lastName": "Phelps",
    "companyName": "ZENSOR",
    "departmentName": "EXOZENT",
    "address": "769 Johnson Street, 8145",
    "dob": "2014-08-12T02:43:40 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 7,
    "firstName": "Tanner",
    "lastName": "Mccullough",
    "companyName": "GLEAMINK",
    "departmentName": "SINGAVERA",
    "address": "822 Troutman Street, 9173",
    "dob": "2016-08-08T08:10:04 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 8,
    "firstName": "Cindy",
    "lastName": "Eaton",
    "companyName": "ENORMO",
    "departmentName": "ZILLANET",
    "address": "995 Knapp Street, 6389",
    "dob": "2018-11-30T12:00:22 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 9,
    "firstName": "Guy",
    "lastName": "Mcgowan",
    "companyName": "GAZAK",
    "departmentName": "MARTGO",
    "address": "764 Perry Place, 3790",
    "dob": "2018-09-29T06:49:22 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 10,
    "firstName": "Janette",
    "lastName": "Wheeler",
    "companyName": "ISOSTREAM",
    "departmentName": "GYNKO",
    "address": "459 Wyckoff Avenue, 3340",
    "dob": "2020-02-08T11:17:22 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 11,
    "firstName": "Diane",
    "lastName": "Dennis",
    "companyName": "PAPRICUT",
    "departmentName": "SIGNIDYNE",
    "address": "176 Thatford Avenue, 8648",
    "dob": "2020-06-30T09:46:14 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 12,
    "firstName": "Robin",
    "lastName": "Macdonald",
    "companyName": "BISBA",
    "departmentName": "QUIZMO",
    "address": "552 Jerome Avenue, 8308",
    "dob": "2015-03-16T07:37:38 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 13,
    "firstName": "Walters",
    "lastName": "Maddox",
    "companyName": "VELOS",
    "departmentName": "EVEREST",
    "address": "945 Bridgewater Street, 5886",
    "dob": "2014-10-27T11:47:20 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 14,
    "firstName": "Anthony",
    "lastName": "Anthony",
    "companyName": "ZAPPIX",
    "departmentName": "LOTRON",
    "address": "472 Ivan Court, 7318",
    "dob": "2018-06-18T01:21:27 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 15,
    "firstName": "Mcintyre",
    "lastName": "Figueroa",
    "companyName": "RETRACK",
    "departmentName": "XPLOR",
    "address": "767 Grimes Road, 5229",
    "dob": "2016-03-13T09:58:57 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 16,
    "firstName": "Dona",
    "lastName": "Chan",
    "companyName": "HANDSHAKE",
    "departmentName": "IMAGEFLOW",
    "address": "983 Himrod Street, 595",
    "dob": "2017-11-09T08:03:30 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 17,
    "firstName": "Nicole",
    "lastName": "Yang",
    "companyName": "ZENTIA",
    "departmentName": "EDECINE",
    "address": "937 Cooke Court, 6670",
    "dob": "2015-02-10T04:28:17 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 18,
    "firstName": "Lourdes",
    "lastName": "Rios",
    "companyName": "ISOLOGIX",
    "departmentName": "KIDGREASE",
    "address": "782 Coffey Street, 8887",
    "dob": "2016-12-21T07:22:22 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 19,
    "firstName": "Roberta",
    "lastName": "Ball",
    "companyName": "ZAGGLE",
    "departmentName": "NAMEGEN",
    "address": "208 Love Lane, 1449",
    "dob": "2021-05-19T02:39:33 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 20,
    "firstName": "Lorrie",
    "lastName": "Baxter",
    "companyName": "PHOTOBIN",
    "departmentName": "PLUTORQUE",
    "address": "292 Montana Place, 1339",
    "dob": "2020-08-05T04:12:32 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 21,
    "firstName": "Gentry",
    "lastName": "Schroeder",
    "companyName": "OLYMPIX",
    "departmentName": "LOCAZONE",
    "address": "682 Crooke Avenue, 4819",
    "dob": "2018-06-08T08:14:34 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 22,
    "firstName": "Kerr",
    "lastName": "Schmidt",
    "companyName": "ZILLATIDE",
    "departmentName": "MEDIFAX",
    "address": "630 Lafayette Avenue, 907",
    "dob": "2018-12-15T08:48:22 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 23,
    "firstName": "Calderon",
    "lastName": "Myers",
    "companyName": "GUSHKOOL",
    "departmentName": "ICOLOGY",
    "address": "481 Matthews Place, 4298",
    "dob": "2017-09-19T03:59:34 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 24,
    "firstName": "Eula",
    "lastName": "Boyd",
    "companyName": "DENTREX",
    "departmentName": "GEEKULAR",
    "address": "337 Baughman Place, 2277",
    "dob": "2020-01-25T10:17:59 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 25,
    "firstName": "Cherry",
    "lastName": "Robertson",
    "companyName": "ZIPAK",
    "departmentName": "ACCIDENCY",
    "address": "942 Hubbard Street, 3769",
    "dob": "2015-03-16T07:42:22 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 26,
    "firstName": "Corrine",
    "lastName": "Meyers",
    "companyName": "COGNICODE",
    "departmentName": "ISOLOGICA",
    "address": "114 Cumberland Street, 6474",
    "dob": "2018-06-10T01:33:27 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 27,
    "firstName": "Mclean",
    "lastName": "Ramirez",
    "companyName": "PEARLESSA",
    "departmentName": "FUELWORKS",
    "address": "709 Thornton Street, 8726",
    "dob": "2020-01-10T05:56:53 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 28,
    "firstName": "Alma",
    "lastName": "Carver",
    "companyName": "SKYPLEX",
    "departmentName": "IDEALIS",
    "address": "613 Manhattan Court, 1124",
    "dob": "2020-05-19T07:58:06 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 29,
    "firstName": "Nolan",
    "lastName": "Norman",
    "companyName": "ZIORE",
    "departmentName": "XINWARE",
    "address": "182 Greenwood Avenue, 708",
    "dob": "2020-01-20T12:16:33 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 30,
    "firstName": "Francesca",
    "lastName": "Avery",
    "companyName": "SURETECH",
    "departmentName": "PORTALIS",
    "address": "399 Ridgewood Place, 9308",
    "dob": "2014-11-26T12:34:46 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 31,
    "firstName": "Sullivan",
    "lastName": "Odom",
    "companyName": "INEAR",
    "departmentName": "BOLAX",
    "address": "628 Drew Street, 1993",
    "dob": "2015-08-23T07:14:52 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 32,
    "firstName": "Soto",
    "lastName": "Monroe",
    "companyName": "SPACEWAX",
    "departmentName": "HOMETOWN",
    "address": "801 Locust Street, 3665",
    "dob": "2018-07-12T04:12:19 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 33,
    "firstName": "Castaneda",
    "lastName": "Dyer",
    "companyName": "ASSITIA",
    "departmentName": "SULFAX",
    "address": "110 Bennet Court, 5212",
    "dob": "2020-06-08T04:36:52 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 34,
    "firstName": "Charity",
    "lastName": "Richards",
    "companyName": "QUANTALIA",
    "departmentName": "REVERSUS",
    "address": "817 Norwood Avenue, 2519",
    "dob": "2019-11-09T04:20:38 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 35,
    "firstName": "Bryan",
    "lastName": "Sparks",
    "companyName": "ECRATIC",
    "departmentName": "MICROLUXE",
    "address": "326 King Street, 1890",
    "dob": "2014-01-08T07:23:43 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 36,
    "firstName": "Key",
    "lastName": "Barrera",
    "companyName": "EPLOSION",
    "departmentName": "HOMELUX",
    "address": "349 Highland Place, 6444",
    "dob": "2019-04-01T05:53:47 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 37,
    "firstName": "Richard",
    "lastName": "Mueller",
    "companyName": "AFFLUEX",
    "departmentName": "ZILPHUR",
    "address": "578 Seaview Avenue, 9485",
    "dob": "2016-06-10T10:35:54 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 38,
    "firstName": "Summers",
    "lastName": "Murray",
    "companyName": "SPHERIX",
    "departmentName": "EXTREMO",
    "address": "485 Clarkson Avenue, 8757",
    "dob": "2019-06-11T06:27:22 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 39,
    "firstName": "Elvia",
    "lastName": "Benton",
    "companyName": "ROUGHIES",
    "departmentName": "VORATAK",
    "address": "976 Jerome Street, 3378",
    "dob": "2018-02-12T03:27:40 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 40,
    "firstName": "Daisy",
    "lastName": "Torres",
    "companyName": "OVOLO",
    "departmentName": "EMTRAK",
    "address": "673 Lincoln Avenue, 8899",
    "dob": "2018-01-10T07:36:17 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 41,
    "firstName": "Woodard",
    "lastName": "Delgado",
    "companyName": "CINESANCT",
    "departmentName": "NETPLODE",
    "address": "315 Norman Avenue, 6388",
    "dob": "2021-06-04T05:38:24 -06:-30"
  },
  {
    "state": "Rajasthan",
    "city": "jaipur",
    "employeeID": 42,
    "firstName": "Pam",
    "lastName": "Buckner",
    "companyName": "VISALIA",
    "departmentName": "BULLJUICE",
    "address": "136 Wilson Avenue, 3905",
    "dob": "2015-03-10T03:15:48 -06:-30"
  }
]
