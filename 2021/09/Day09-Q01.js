let puzzleInput = [
  "0197653456789987679545987978921245689901497654212455689767899878999979653246892123569876467899212346",
  "9989542349899986578959976557890134599892398943201234678956789467989867932135789012398764345678923456",
  "8679931298999765459898765445921247987689459865432345889345892399876546899013894123459976569799634577",
  "6567895497998764345789543239895456797535967976545467891234989989865434598954993248969987678999545798",
  "8456897986539975234568955398789967998212899597676578910395678979996423987895789356798698799997656789",
  "7357899765624987356979967997678899876323795498789789929989989968989219876789998767986569899998867899",
  "6479998654012998487899879886456799985434589349899897898879899757878929865699989878987461939879878989",
  "7989876532129876598967998754347899876545679299965945977569798436569197654389876989986320129865989778",
  "8995987644234998679459899975456943987656798989654326965497656424459298796578965699875431234979998568",
  "9424987654346789789348789986567892398767987878943219876989843212348999887679873579987549345698976457",
  "5313598789556999893245679987679921299899656667894398989878964301237899998995432123597698996987665376",
  "2102459898967898987656799998789992989998943456789497898957896324356789449789521012398987989976554245",
  "3213456997998967899878978969899789978997432347899986787545697534458891234689942123789976879876432156",
  "4323569876899756799989569956987698766986421566789995631234789947669910123799893454569895366999943018",
  "5444567985679534789991349899996569645977310145679864320123456898978954394569789965698789245987894236",
  "6565979874599323567890198798989459759864321236799998432335679999989796989998679796987679123976789345",
  "8989898765678901378932987567868969898765462347899876543479895695395689879876534599876568999435899456",
  "9998719876789323489649876476457890949976574456789987687568996989987899965432123489985389987645998767",
  "2987624989898754599656975324348991234989675778892399898978989878998999996542014678976498998757899898",
  "1298545699999865987999764210235689946798776799999567999989879767899998987843124789998567899969999919",
  "0987656789989986976889754321347999899989987898898998999997665456789987698764434999987689921399989101",
  "1398777899874197975678965432456789678976898987686889989876556345999876549978556789998995439978976992",
  "2349889999963098984568977949767894569865789997575679764986433235794989998989678997899986598867895889",
  "9456992198742129799679989898979913598754657896434768992096520145693199877898789245999999987656954678",
  "8967921098653245698789998767892102987653235789123456789989321238789098965459890129878998654347893557",
  "7898943459854756999895987658943213498732126789012567999878932456896987654323991298765579543238912345",
  "6799854598769867899954398769654324596543245899923456898969896577945698763212679987573498764369543467",
  "5679767699989998999863239878965735987654376799899767987756797689434997853101598765432349878456976568",
  "3568979987899769998943143989876896798765797895798979765645989995319876543213459898543556997567898679",
  "2389998976598643987521012398997997999897898954687997654236978894201998765325578987656789698689998789",
  "3567897895498656799432123567898998988999969543456789894399769799213459876736789998967896569799999894",
  "7678976789329767987993544679999999976987654312398999975987654568924599987858998999989999678998989943",
  "8799235699901989876789795889989988665398979103456789989999543457895987698969987894595698999987867932",
  "9890123988892398965678976999869876543239898919767896799988651367939876459878976943203497899876756891",
  "9921299876793987834779998998754989654198787998998924999977520179923984369989645894312986789765347799",
  "7549987975899875324567999989965999965987676797899212398765421467899865458999786797324975678963235678",
  "8998975986921965434678999878899899878986555656899404459875432348954986567899897896439864567942124579",
  "9397654599899876645889889756789789989299434346798912346986545699843298789921998999598963878921023459",
  "3298943498765987856795679847679678990198621234567895487987659789765109899910139998997654989542434678",
  "9099894598654398967894599934533467799986532345998987579298767999953212999891239997549765698656547789",
  "8989789999763219878962378921012345678987543456789598690129899459895629989789398876839876789767656896",
  "7677679899972102989754569532133469789098658597999439789436943245789798765679987654324987999898867997",
  "8564576789989743499895678943544678993129867998998929896545692134567999954399999976786798956999999898",
  "6432345894398654899998789654665689943248978969987899987657789029989898899498763987997899235689988789",
  "4321434899298776789359898765887799894356989653656789898767892198898756798979942199998989957899975678",
  "5210123678929898995498979876798988789987996542345896789878954987668645987668893267999777898998654589",
  "7491234579012999976987567987899576699999876431556965432999979876557539875456789346789656899998785699",
  "8989955689129899897896456798954324598999765432369994321023498767432129654321239997894347912989898789",
  "9979896793298766798989399899765945987899976545498789432344987654321098768732997899965456899876989899",
  "8765799975987654899878989939879869876789899876987687993656798765534129879549876799989567899765674999",
  "7654567899998432398765779019989998765456798987899456789767929876656434999656965689997698969874323478",
  "8652089998998657989874568998999879876789897798998767898979213987767849878969854569998789754985412567",
  "7643578997899869876543457897998765998995965679349879937698923998878997667898773237899997642195423456",
  "8654689976879878988764598976899654959123987890199995326457899879989986456899632126789999654987689587",
  "9869789865767989899875789655698969843234899989987654215345989768999965345798543234567898767998789678",
  "7989897654656798797976789434987998764345678978998754301234569654569874237997656346678999898959898789",
  "5496987643235897656987894324996889875456789867929865456345978943349752146789866457789999929234999893",
  "4345695432124569547898989209875679876568997657813987678456989432198643256789987667899989910126798912",
  "6456789643097697667969679213986789987689598543101299899568996543398764469899999788999876899437987893",
  "7767998764989899878954598929987891298795349959212349998699569756459895678978999899998765698948976789",
  "8998939875978999989543987898998992999894239898923598979789459867968998799567987999765984567959865990",
  "9769323989865989995432496787899989799930199796899987869894324989899879899979876898754323678999754891",
  "7653212399754779996531985656799877679321987645678975456965455798799864999899985789543210989988966789",
  "8874309987653656789699764545689954578939998437899986345896596987678972989768994898764439899877899891",
  "9986498767321247899987653434599843467998992123789997956789989876567899767957989959765998765656789910",
  "6598987653210345929876432125987656567897789035679989898899976995459998951345679349879876543234898923",
  "5329998654328456913998521016798767878976578997799878789999895976599987530123489219989998932123567899",
  "6910989865987667899876543223569899989895456789912965689998754698679987621238999998994987543234589998",
  "9899878997898898945987956334689991398774346999899754678987543549989986532357898897892198656357678947",
  "5798769898999959321398967456789889987653234987678943789995432125798998754588987646789098765458789435",
  "3987656799986543210179878997995679876543129876567965699864321013457999885678996535899199876768997623",
  "9886545678999654322457989598933598765431098965459899789765532134567892976989987323988989997879789794",
  "8765434567998768473578992349212399979532987653217678999898643246789921987896795439976578998997678989",
  "9876323458999898764679874459323989998754987632104569632987654356896439898945987698765489899989539878",
  "9988434567899999989789765598994978999875698544323689541098765467989597659139898987654346789878910167",
  "9876575878999888999899877987689767891986987698765678932129876579768987543298769499874234679967892345",
  "5987689999998767999910998976598756990197898789879889543234987678957897654369754398765645698856789756",
  "4398794599987656789999999896432646789298989990989997654345798999348998976456963219879896897645679877",
  "3239895989876543498987798754321434567999876421299598766987899621298999986569876323989999982123899998",
  "6345999876987432567975649865410124567899996542998439987898999542456789998998765456899998765236789439",
  "5456899865697643778954234987521234679988889959886724398999997663968997899129976568999899874345689321",
  "6667897654987654567892123498435345898767767898765410279899989789899466789298799789998776965456797452",
  "7979999743598775799954294999545456998656656999874321456789878998791245679989578999886565978967896543",
  "8999898995679896987968989899876569876535345789975432357899869876589387889875465789765434989878999964",
  "9988757989789997896899876789997879854321236789997549456798756982468998998753234898954326499989198895",
  "9876545678992198975798765679998997653210147999989698967898743210178959769942102457893212389991096796",
  "2997626789999019424597654568939298764321256899978987998987654321389543457943212967894345678992985689",
  "1459739899898929013698742379029109885454345998765676899998765434499872129874567898965566989989864578",
  "0296547998767898924797653489198999996965456789653235789999876595578953298765678999899789899876943456",
  "2987656789248567895679854579987689999876787995432123567899987989989875459876789989789898679875432345",
  "3498779893123468976789765678966578899989898954321012345678998979899976569987899876678987598765320156",
  "4999889954564567897899897889656466789999979765432125767889219856789989878999998534567895459876431345",
  "9876998795778678998999998996542345678999865986544234579995439767998799989998996545698954346997532666",
  "8965345696889789129989329986421234899999754397655655678976546978945679999986989676789876234598754598",
  "7844236789994998998778939765410125679989653298786769889999656989234567899975879989893986356798768789",
  "5432125679553456986567799877321236798979790129897878999998987993123458998764567993912995467899989899",
  "6594034689432349987434567986432347897857989245998989988877999899012367899653467892199876878901498967",
  "7689125678944498975412798987685498986546679956789899876456997688975457998762345993987989989892397756",
  "8794234789656987654323689999886579873234567897896797984349876567896569874321235689976492198789976546",
  "9895345998767899875454568923987689764356678998965986543212987678987698765210123498654321013567894324",
];

puzzleInput2 = [
  "2199943210",
  "3987894921",
  "9856789892",
  "8767896789",
  "9899965678",
];

puzzleInput = puzzleInput.map((line) =>
  line.split("").map((digit) => parseInt(digit))
);

let i, j;
const lowPoints = [];
for (i = 0; i < puzzleInput.length; i++) {
  for (j = 0; j < puzzleInput[0].length; j++) {
    let adjLowCount = 0;
    let adjCount = 0;
    if (
      puzzleInput[i - 1] !== undefined &&
      puzzleInput[i - 1][j] !== undefined
    ) {
      adjCount += 1;
      if (puzzleInput[i - 1][j] > puzzleInput[i][j]) adjLowCount += 1;
    }
    if (puzzleInput[i] !== undefined && puzzleInput[i][j - 1] !== undefined) {
      adjCount += 1;
      if (puzzleInput[i][j - 1] > puzzleInput[i][j]) adjLowCount += 1;
    }
    if (puzzleInput[i] !== undefined && puzzleInput[i][j + 1] !== undefined) {
      adjCount += 1;
      if (puzzleInput[i][j + 1] > puzzleInput[i][j]) adjLowCount += 1;
    }
    if (
      puzzleInput[i + 1] !== undefined &&
      puzzleInput[i + 1][j] !== undefined
    ) {
      adjCount += 1;
      if (puzzleInput[i + 1][j] > puzzleInput[i][j]) adjLowCount += 1;
    }

    if (adjCount === adjLowCount) {
      lowPoints.push(puzzleInput[i][j]);
    }
  }
}

console.log({
  lowPoints,
  lowPointsRisk: lowPoints.reduce((prev, cur) => prev + cur + 1, 0),
});
