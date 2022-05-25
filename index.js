
function availablePayments(){
    let payments = [{
        name:'Palawan Express',
        imageIcon:'https://play-lh.googleusercontent.com/8ohEjlb3dzWnIjs7nMqEFiSEzadagMDe2SdnuRH9lI11AbmfsqdQb8bLN9_RvS8EUbE=s200'
    },{
        name:'M Lhuillier',
        imageIcon:'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bc6fa618967063.562d269cd28f3.png'
    }]

    payments.forEach(payment =>{
        console.log(payment)
    }
    )
}
module.exports.availablePayments = availablePayments;