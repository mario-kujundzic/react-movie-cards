import React, {useState} from 'react';

function AddCard({addMovie}) {
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");

    const [error, setError] = useState({
        url: false,
        title: false,
        subtitle: false,
        description: false
    });

    const [nextId, setNextId] = useState("600");

    const handleUrlChange = (event) => {
        const val = event.target.value;
        setImageUrl(val); 
    };

    const handleTitleChange = (event) => {
        const val = event.target.value;
        setTitle(val); 
    };

    const handleSubtitleChange = (event) => {
        const val = event.target.value;
        setSubtitle(val); 
    };

    const handleDescriptionChange = (event) => {
        const val = event.target.value;
        setDescription(val); 
    };

    const handleAdd = () => {
        console.log("hello from add");
        let validation = true;
        let errors = {        
            url: false,
            title: false,
            subtitle: false,
            description: false
        };
        if (imageUrl == "") {
            errors.url= true;
            validation = false;
        }
        if (title == "") {
            errors.title= true;
            validation = false;
        }
        if (subtitle == "") {
            errors.subtitle= true;
            validation = false;
        }
        if (description == "") {
            errors.description= true;
            validation = false;
        }
        setError(errors);
        if (!validation) {
            return;
        }

        const movie = {
            id: nextId,
            title: title,
            subtitle: subtitle,
            description: description,
            year: 2000,
            imageUrl: imageUrl,
            rating: [],
            deletable: true
        }
        setNextId((+nextId + 100).toString());

        addMovie(movie);  
        setImageUrl("");
        setTitle("");
        setSubtitle("");
        setDescription("");      
    };

    return (
        <div className="movie-card">
            <div className="movie-card card">
            <div className="card-body">
                <textarea className="add-url" type="text" value={imageUrl} onChange={handleUrlChange} placeholder="Image url" />
                {error.url && (<p className="error">Please enter an URL!</p>) }
                <input className="add-title" type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
                {error.title && (<p className="error">Please enter a title!</p>) }
                <input className="add-subtitle" type="text" value={subtitle} onChange={handleSubtitleChange} placeholder="Subtitle" />
                {error.subtitle && (<p className="error">Please enter a subtitle!</p>) }
                <textarea className="add-description" type="text" value={description} onChange={handleDescriptionChange} placeholder="Description" />
                {error.description && (<p className="error">Please enter a description!</p>) }

            </div>
            <div className="card-footer">
                <button className="add-button badge-primary badge-pill" onClick={handleAdd}>Add movie </button>
            </div>
            </div>
        </div>
    )
};

export default AddCard;