const fetch = require('node-fetch')
const axios = require('axios')
const fs = require("fs")
const jimp = require('jimp')
const chalk = require('chalk')
const moment = require('moment-timezone')





self = "SELF"
bot = "BOT"
Font = "simple"

 
const h2k = (number) => {
    var SI_POSTFIXES = ["", " Ribu", " Juta", " Miliar", " Triliun", " P", " E"]
      //  var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const FileSize = (number) => {
    var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error in getBuffer: ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(4).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const generateProfilePicture = async (buffer) => {
	const jimp = await jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function delay(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms))
}



const unixTimestampSeconds = (date = new Date()) => {
Math.floor(date.getTime() / 1000)
}
const unixTimeSecond = unixTimestampSeconds

const generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}




//Runtime
const runtime = (seconds) => {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})


let dot = new Date(new Date + 3600000)
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(dot)


module.exports = { 
getBuffer, 
generateProfilePicture,
weton,week,calender,dateIslamic
}
