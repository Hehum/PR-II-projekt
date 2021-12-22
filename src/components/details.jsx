import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import zdj from './wp.jpg';
import zdj2 from './lotr.jpg';


class Details extends Component {

    state = { };
    render(){
        return <div style={{float: "left",
        marginTop: '5%',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '2%',
        width: '86%',
        possision: 'fixed'

        }}>
            <div style={{float: "left",}}>
                <img src={zdj}  style={{float: "left",}}/>
                <div style={{
                       float: "left",
                      marginLeft: '10px',
                      width: '61%',
                      possision: 'fixed'
                }}>

                <h2  > Władca Pierścieni: Drużyna Pierścienia</h2>
                <h3 > Reżyseria: Peter Jackson</h3>
                <h4> Rok produkcji: 2001</h4>
                <h5> Opis:</h5>
                <p >Kiedyś, na pamiętnej wyprawie pod Samotną Górę Bilbo Baggins (Ian Holm) zdobył przez przypadek pierścień.
                Jeden z jego starych dobrych znajomych, który także uczestniczył w tamtej wyprawie - czarodziej Gandalf (Ian McKellen),
                zaczyna teraz podejrzewać, że jest to Jedyny Pierścień, który może dać władzę nad światem. Został on dawno temu stworzony
                przez Saurona we wnętrzu Góry Zagłady i teraz jego twórca chce go odzyskać, by zrealizować swoje niebezpieczne plany.
                Frodo Baggins (Elijah Wood), który otrzymał ten pierścień od Bilba, musi uciekać. Na naradzie w Rivendell zostaje podjęta decyzja,
                 że drużyna złożona z dziewięciu przedstawicieli różnych ras podejmie się razem z Frodem - Powiernikiem Pierścienia -
                 wykonać misję zniszczenia potężnego pierścienia. W Śródziemiu zanosi się na wojnę. Robi się niebezpiecznie, pojawiają się
                  tajemniczy Czarni Jeźdźcy. Losy tej wojny nie będą jednak zależeć tak naprawdę od rozkładu sił militarnych.
                  Wszystkie wojska będą jedynie przykrywką, losy świata zależą od Drużyny Pierścienia i od tego,
                   czy Powiernik Pierścienia ukończy szczęśliwie swoją misję. Jest to o tyle trudniejsze, że Pierścień Władzy budzi
                   silne pożądanie w ludziach, którzy się z nim stykają i potrafi zawładnąć ich psychiką, jeśli nie będą wystarczająco odporni.
                    W ślad za Drużyną rusza między innymi jedna z ofiar Pierścienia Władzy - Gollum (Andy Serkis), który posunie się do
                    wszystkiego, by odzyskać Pierścień, który kiedyś zrujnował jego życie i zrobił z niego potwora.</p>

                </div>
                </div>
            </div>


    }
}

export default Details;