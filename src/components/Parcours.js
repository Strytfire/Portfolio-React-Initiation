import React from 'react';

const Parcours = () => {
    return (
        
            <div className='parcours-content-bg'>
                <div class="mask-content-parcours">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className='parcours-content'>
                    <div className='title-parcours'>
                        <span></span>
                        <h1>Parcours et Expériance
                        </h1>
                    </div>
                    <div className='flex'>
                    <div className='bc-timeline'>
                        <ul className='timeline'>
                            <li data-date="2022 - 2023">
                                <h3>Soon </h3>
                                <p><span>...</span></p>
                                <p>....</p>
                            </li>
                            <li data-date="2021 - 2023">
                                <h3>Brevet de Technicien Supérieur - Services Informatique aux Organisations </h3>
                                <p><span>Lycée Polyvalent Marc Bloch</span> Sérignan, France</p>
                                <p>Option SLAM</p>
                            </li >
                            <li data-date="2019 - 2021">
                                <h3>Baccalauréat Professionnel - Système Numérique </h3>
                                <p><span>Lycée Privée Sacrée Coeur</span> Béziers, France</p>
                                <p>Option ARED - Mention Bien</p>
                                
                            </li>
                        </ul>
                    </div>
                    <div className='bc-timeline'>
                        <ul className='timeline'>
                            <li data-date="Janv. 2023 - Fév. 2023">
                                 <h3>Stage - BTS SIO 2em année</h3>
                                <p><span>ADSL informatique</span> Sérignan, France</p>
                                <p><i class='bx bx-chevron-right'></i>Création de site web</p>
                                <p><i class='bx bx-chevron-right'></i>Création application windows</p>
                                <p><i class='bx bx-chevron-right'></i>Création application mobile</p>
                            </li>
                            <li data-date="Mai 2022 - Juin 2022">
                                <h3>Stage - BTS SIO 1er année</h3>
                                <p><span>Hôpital Privée du Grand Narbonne</span> Montredon, France</p>
                                <p><i class='bx bx-chevron-right'></i>Création intranet</p>
                                <p><i class='bx bx-chevron-right'></i>Création application windows</p>
                            </li >
                            <li data-date="Été 2021">
                                <h3>CDD - Technicien informatique</h3>
                                <p><span>Hôpital Privée du Grand Narbonne</span> Montredon, France</p>
                                <p><i class='bx bx-chevron-right'></i>Maintenance informatique</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="mask-content-parcours-end">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        
    );
};

export default Parcours;