import React from 'react';
import SectionDivider from './SectionDivider';

const Profil = () => {
    return (
        <><SectionDivider></SectionDivider>
        <div className='content-profil'>
            <div className='text-profil'>
                <span></span>
                <h1>Présentation</h1>
                <a>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ea excepturi itaque nobis optio ipsam minus beatae, expedita id, autem modi sunt sequi praesentium sed! Minus non sed vitae voluptates dolor perferendis dolorum at minima blanditiis. Exercitationem error alias fuga repellendus minus animi ratione optio repudiandae quisquam voluptatem expedita, quos harum. Omnis, minus. Impedit aut neque hic magnam, quam eaque voluptatem ipsam iure aperiam, delectus a error ea nihil. Et numquam perspiciatis iusto ratione officiis excepturi, voluptas quam, molestias praesentium nihil vitae, a maiores sit fugit sed dolorum beatae! Nesciunt rerum ad est et sequi architecto cumque fugiat possimus distinctio.</a>

            </div>
            <div className='profil-container'>
                <div className='in-profile'>
                    <div className='img-profil'></div>
                    <ul>
                        <li><strong>Nom :</strong> Cintrat</li>
                        <li><strong>Prénom :</strong> Simon</li>
                        <li><strong>Date de naissance :</strong> 29 Janvier 2003</li>
                        <li><strong>Adresse :</strong> 55 Rue du portail, Valros</li>
                        <li><strong>Téléphone :</strong> +33 7 82 16 19 23</li>
                        <li><strong>Email :</strong> simon.cintrat@gmail.com</li>
                    </ul>
                </div>
                <div className='reseau-container'>
                    <a><i class='bx bxl-instagram bx-sm'></i></a>
                    <a><i class='bx bxl-discord-alt bx-sm'></i></a>
                    <a><i class='bx bxl-linkedin bx-sm'></i></a>
                    <a><i class='bx bxl-github bx-sm'></i></a>
                    <a><i class='bx bxl-twitter bx-sm'></i></a>
                    <a><i class='bx bxl-twitch bx-sm'></i></a>
                </div>



            </div>
           
        </div>
        </>
    );
};

export default Profil;