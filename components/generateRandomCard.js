const iconCard = ['♦', '♥', '♠', '♣']
const valueCard = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

const findRandomElementFromList = (list) => {
    return list[Math.floor(Math.random()*list.length)];
}

const randomCard = (value, icon) => {
    let color = '';
    icon=== '♥' || icon === '♦'? color = 'text-red-500' 
    : color = 'text-black';
    
    return  (
        `<article id='card' class="border w-60 h-80 mx-auto bg-gray-100 rounded mt-20 flex flex-col justify-between">
            <div class="w-100 flex justify-start m-5">
               <span class="text-5xl ${color}">${icon}</span> 
            </div>
            <div class="w-100 flex justify-center">
                <span class="text-5xl">${value}</span>
            </div>
            <div class="w-100 flex justify-end m-5">
                <span class="text-5xl ${color}">${icon}</span>
            </div>
        </article>`
    );
}
const generateCard = randomCard(findRandomElementFromList(valueCard), findRandomElementFromList(iconCard));


export default generateCard;