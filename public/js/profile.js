const newFormHandler = async (event) => {
    event.preventDefault();

    const title= document.querySelector('#post-name').value.trim();
 
    const contents = document.querySelector('#post-desc').value.trim();

    if (title  && contents) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create post');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }

};

document
.querySelector('.new-project-form')
.addEventListener('submit', newFormHandler);

document
.querySelector('.project-list')
.addEventListener('click', delButtonHandler);