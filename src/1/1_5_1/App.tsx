// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";

const profiles = [
{
    name: 'Maria Skłodowska-Curie',
    src: 'Maria',
    size: {
      width: 70,
      height: 70
    },
    profession: 'physicist and chemist',
    awards:{
      cnt: 4,
      description: ' (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'
    },
    discovered: 'polonium (chemical element)'
},
{
    name: 'Katsuko Saruhashi',
    src: 'KatsukoSaruhashi',
    size: {
      width: 70,
      height: 70
    },
    profession: 'geochemist',
    awards:{
      cnt: 2,
      description: ' (Miyake Prize for geochemistry, Tanaka Prize)'
    },
    discovered: 'polonium (chemical element)'
}
];

function Profile({name, src, width, height, profession, cnt, description, discovered}: {name : string, src : string, width : number, height : number, profession : string, cnt : number, description : string, discovered : string}){
  return (
    <>
    <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(`${src}`)}
          alt={name}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {cnt}</b> 
            {description}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    </>
  );
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile name={profiles[0].name} src={profiles[0].src} width={profiles[0].size.width} height={profiles[0].size.height} profession={profiles[0].profession} cnt={profiles[0].awards.cnt} description={profiles[0].awards.description} discovered={profiles[0].discovered}/>
       <Profile name={profiles[1].name} src={profiles[1].src} width={profiles[1].size.width} height={profiles[1].size.height} profession={profiles[1].profession} cnt={profiles[1].awards.cnt} description={profiles[1].awards.description} discovered={profiles[1].discovered}/>
    </div>
  );
}
