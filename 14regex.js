RegExp

^$

var a = "hi"
a.match("^([a-z])$")

var a = "hi"
a.match("^([a-z])$")
null

var a = "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]

//fix 2 character
var a = "hi"
a.match("^([a-z]{2})$")
["hi", "hi", index: 0, input: "hi", groups: undefined]

//range of character
var a = "hi"
a.match("^([a-z]{2,5})$")

//any length +
var a = "hi"
a.match("^([a-z]+)$")

var a = "Hi"
a.match("^([a-zA-Z0-9]+)$")

var phone = 87678678
phone.match("^[0-9]+$")
//regex only work for strings

phone.toString().match("^[0-9]{10}$")
["87678678", index: 0, input: "87678678", groups: undefined]


//email
var email = "a@a.com"

email.match("^([a-zA-Z0-9$]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null