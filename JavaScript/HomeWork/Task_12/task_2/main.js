//   //    2.
// //  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //      Для кожного елементу свій блок div.comment
//  // Всі характеристики повинні мати свої блоки всередені div.comment

// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let block = document.createElement('div');
        block.classList.add('block');
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment');
            divCard.innerHTML = `
                            <h3>ID: ${comment.id}</h3>
                            <h4>Name: ${comment.name}</h4>
                            <h5>Email: ${comment.email}</h5>
                            <h6>Body: ${comment.body}</h6>
`;
            block.appendChild(divCard);
            document.body.appendChild(block)
        }
    })


