<?php
include_once 'header.php';
?>

<br><br><br>

<div class="calculator-grid" id="calculator">
    <div class="output">
      <div data-previous-operand class="previous-operand"></div>
      <div data-current-operand class="current-operand"></div>
    </div>  
      <button data-all-clear class="span-two">AC</button>
      <button data-delete>DEL</button>
      <button data-operation>÷</button>
      <button data-number>1</button>
      <button data-number>2</button>
      <button data-number>3</button>
      <button data-operation>*</button>
      <button data-number>4</button>
      <button data-number>5</button>
      <button data-number>6</button>
      <button data-operation>+</button>
      <button data-number>7</button>
      <button data-number>8</button>
      <button data-number>9</button>
      <button data-operation>-</button>
      <button data-number>.</button>
      <button data-number>0</button>
      <button data-equals class="span-two">=</button>

      <div class="hide-calculator" id="hide-calculator">
        Cacher la calculatrice<br>
        <i>Hide calculator</i>
      </div>
  </div>
  <div class="show-calculator" id="show-calculator">
    <svg id="svg-calc" viewbox="0 0 50 50">
      <path d="M 0 0,0 50, 50 50, 50 0 Z"/>
      <path d="M 8 10, 40 10, 40 15, 8 15"/>
      <path d="M 8 25, 8 25, 12 25"/>
      <path d="M 8 35, 8 35, 12 35"/>
      <path d="M 17 25, 18 25, 22 25"/>
      <path d="M 17 35, 17 35, 22 35"/>
      <path d="M 27 25, 28 25, 32 25"/>
      <path d="M 27 35, 27 35, 32 35"/>
      <path d="M 38 25, 37 25, 42 25"/>
      <path d="M 38 35, 37 35, 42 35"/>
    </svg>
  </div>

<div style="float:left; width:100%;">

<div class="table-wrapper">
<a href="reporting.php"><button id="btn-home">Saisir un autre reporting<br><i>Input another report</i></button></a>
<a href="history.php"><button id="btn-anal">Consulter l'historique<br><i>View History</i></button></a>
<br><br><br>

<?php

session_start();
echo "<h1 id=\"history-spa-name\">";
echo $_SESSION["userid"];
echo "</h1><br><h2>Analyse Comparée - <i>Compared Analysis</i></h2><br><br>";

?>

<hr id="compare">
<br>
<h3>Sélectionnez le <span style="color:rgb(235,255,208); text-shadow: 1px 1px 2px black;">mois</span> et l'<span style="color:rgb(235,255,208); text-shadow: 1px 1px 2px black;">année</span>
, puis cliquez sur OK.<br><br>
<i>Select <span style="color:rgb(235,255,208); text-shadow: 1px 1px 2px black;">month</span> and <span style="color:rgb(235,255,208); text-shadow: 1px 1px 2px black;">year</span>, then click OK.</i></h3>
<br>


<select class="select-month" id="select-month2" onchange="getMonth2();">
    <option value=""></option>
    <option value="1">Janvier - <i>January</i></option>
    <option value="2">Février - <i>February</i></option>
    <option value="3">Mars - <i>March</i></option>
    <option value="4">Avril - <i>April</i></option>
    <option value="5">Mai - <i>May</i></option>
    <option value="6">Juin - <i>June</i></option>
    <option value="7">Juillet - </i>July</i></option>
    <option value="8">Août - <i>August</i></option>
    <option value="9">Septembre - <i>September</i></option>
    <option value="10">Octobre - <i>October</i></option>
    <option value="11">Novembre - <i>November</i></option>
    <option value="12">Décembre - <i>December</i></option>
</select>

<select class="select-month" id="select-year2" onchange="getMonth2();">
    <option value=""></option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
    <option value="2025">2025</option>
    <option value="2026">2026</option>
    <option value="2027">2027</option>
    <option value="2028">2028</option>
    <option value="2029">2029</option>
    <option value="2030">2030</option>
</select>

<form action="analysis.php#compare" method="post" name="filter2">
<input type="number" name="mois2" id="get-month2" readonly style="display:none;">
<input type="number" name="annee" id="get-year2" readonly style="display:none;">
<br>
<input class="month" type="submit" value="OK" style="width:270px;">
</form>

<br>
<h3>Cliquez sur les <span style="color:rgb(144,20,59);">boutons</span> pour afficher les données<br>
<i>Click on the buttons to display data</i></h3>
<br>
<h3>Cliquez sur les boutons <span style="color: rgb(63,125,47);">EXCEL</span> pour télécharger des rapports spécifiques.<br>
<i>Click on the <span style="color: rgb(63,125,47);">EXCEL</span> buttons to download specific reports.</i></h3>
<br>

<!--CA PDT SUR CA TOTAL----------------------------------------------------------------------------------------------------------------->

<button id="export-ratio-retail-to-total" onclick="exportTableToExcel('table-ratio-retail-to-total');" class="exportXL">EXCEL</button>
<button id="btn-ratio-retail-to-total" class="btn-show-history"><h1>% CA PDT/TOT CA - <i>% RETAIL REV/TOT REV</i></h1></button>
<button id="btn-close-ratio-retail-to-total" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-ratio-retail-to-total\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">% CA PDT SUR CA TOTAL<br><i>% RETAIL REV TO TOTAL REV</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>RATIO</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-1\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-pdt-to-total\">{$row['pdt_to_total']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-1\">
    <div class=\"graph-inside\" id=\"chart-1\">

    </div>
    
</div>";

echo "</table>";


?>
<br>

<!--CA PDT VISAGE SUR CA PDT TOTAL----------------------------------------------------------------------------------------------------------------->

<button id="export-pdt-vis-sur-total-pdt" onclick="exportTableToExcel('table-pdt-vis-sur-total-pdt');" class="exportXL">EXCEL</button>
<button id="btn-pdt-vis-sur-total-pdt" class="btn-show-history"><h1>% CA PDT VIS - <i>% RETAIL FACE REV</i></h1></button>
<button id="btn-close-pdt-vis-sur-total-pdt" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-pdt-vis-sur-total-pdt\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">% CA pdts visage / CA pdts total<br><i>% Retail Face line rev / Total Retail rev</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>RATIO</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-2\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-pdt-vis\" >{$row['prop_ca_pdt_vis_sur_tot_pdt']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-2\">
    <div class=\"graph-inside\" id=\"chart-2\">

    </div>

</div>";

echo "</table>";

?>
<br>

<!--RETAIL TO SERVICE VALEUR------------------------------------------------------------------------------------------------------------>

<button id="export-rs-total-valeur" onclick="exportTableToExcel('table-rs-total-valeur');" class="exportXL">EXCEL</button>
<button id="btn-rs-total-valeur" class="btn-show-history"><h1>RETAIL TO SERVICE CA, <i>BY REVENUE</i></h1></button>
<button id="btn-close-rs-total-valeur" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-rs-total-valeur\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">RETAIL TO SERVICE CA, BY REV.</td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>RATIO</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-3\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-rs-val\">{$row['rs_rev_total']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-3\">
    <div class=\"graph-inside\" id=\"chart-3\">

    </div>
</div>";

echo "</table>";

?>
<br>

<!--RETAIL TO SERVICE VOLUME TOTAL------------------------------------------------------------------------------------------------------------>

<button id="export-rs-total-volume" onclick="exportTableToExcel('table-rs-total-volume');" class="exportXL">EXCEL</button>
<button id="btn-rs-total-volume" class="btn-show-history"><h1>R/S TOTAL VOLUME</h1></button>
<button id="btn-close-rs-total-volume" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-rs-total-volume\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">RETAIL TO SERVICE TOTAL VOLUME</td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>RATIO</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-4\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-rs-vol\">{$row['rs_nb_total']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-4\">
    <div class=\"graph-inside\" id=\"chart-4\">

    </div>
</div>";

echo "</table>";

?>
<br>

<!--RETAIL TO SERVICE VOLUME VISAGE------------------------------------------------------------------------------------------------------------>

<button id="export-rs-volume-vis" onclick="exportTableToExcel('table-rs-volume-vis');" class="exportXL">EXCEL</button>
<button id="btn-rs-volume-vis" class="btn-show-history"><h1>R/S VOLUME VISAGE - <i>FACE</i></h1></button>
<button id="btn-close-rs-volume-vis" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-rs-volume-vis\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">R/S VOLUME VISAGE - <i>FACE</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>RATIO</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-5\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-rs-vis\" >{$row['rs_nb_vis']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-5\">
    <div class=\"graph-inside\" id=\"chart-5\">

    </div>
</div>";

echo "</table>";

?>
<br>

<!--RETAIL TO SERVICE VOLUME CORPS------------------------------------------------------------------------------------------------------------>

<button id="export-rs-volume-cor" onclick="exportTableToExcel('table-rs-volume-cor');" class="exportXL">EXCEL</button>
<button id="btn-rs-volume-cor" class="btn-show-history"><h1>R/S VOLUME CORPS - <i>BODY</i></h1></button>
<button id="btn-close-rs-volume-cor" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-rs-volume-cor\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">R/S VOLUME CORPS - <i>BODY</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>RATIO</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-6\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-rs-cor\">{$row['rs_nb_cor']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-6\">
    <div class=\"graph-inside\" id=\"chart-6\">

    </div>
</div>";

echo "</table>";

?>
<br>

<!--PROPORTION SOINS REALISES------------------------------------------------------------------------------------------------------------>

<button id="export-soins" onclick="exportTableToExcel('table-soins');" class="exportXL">EXCEL</button>
<button id="btn-soins" class="btn-show-history"><h1>SOINS REALISES H- <i>TREAT. BREAKDOWN HRS</i></h1></button>
<button id="btn-close-soins" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-soins\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">Proprotion des soins réalisés par catégorie, en heures<br><i>Proportion of treatments performed by category, in hours</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>VISAGE<br><i>FACE</i></td>
    <td>MASSAGE</i></td>
    <td>PREP</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-7\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-prop-sv\" >{$row['prop_h_soin_vis']}</td>
        <td>{$row['prop_h_soin_mass']}</td>
        <td>{$row['prop_h_prep']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-7\">
    <div class=\"graph-inside\" id=\"chart-7\">

    </div>
    <p>%soins visage - <i>% face treat.</i></p>
</div>";

echo "</table>";

?>
<br>

<!--PANIER MOYEN------------------------------------------------------------------------------------------------------------>

<button id="export-pm" onclick="exportTableToExcel('table-pm');" class="exportXL">EXCEL</button>
<button id="btn-pm" class="btn-show-history"><h1>PANIER MOY. - <i>AVG. TICKET</i></h1></button>
<button id="btn-close-pm" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-pm\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">PANIER MOYEN - <i>AVERAGE TICKET</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>€</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-8\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-pm\" >{$row['pm']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-8\">
    <div class=\"graph-inside\" id=\"chart-8\">

    </div>

</div>";

echo "</table>";

?>
<br>

<!--PANIER MOYEN PRODUITS------------------------------------------------------------------------------------------------------------>

<button id="export-pm-pdt" onclick="exportTableToExcel('table-pm-pdt');" class="exportXL">EXCEL</button>
<button id="btn-pm-pdt" class="btn-show-history"><h1>PANIER MOY. PDT - <i>AVG. RETAIL TICKET</i></h1></button>
<button id="btn-close-pm-pdt" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-pm-pdt\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">Panier moy. pdt. par acheteur de produis<br><i>Avg. retail ticket per retail buyer</i></i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>€</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td class=\"nom-graph-9\" style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td class=\"graph-pmp\" >{$row['pm_pdt']}</td>
    </tr>
    ";
    
};

echo "<div class=\"graph\" id=\"graph-9\">
    <div class=\"graph-inside\" id=\"chart-9\">

    </div>

</div>";

echo "</table>";

?>
<br>

<!--OCCUPATION ------------------------------------------------------------------------------------------------------------>

<button id="export-occ" onclick="exportTableToExcel('table-occ');" class="exportXL">EXCEL</button>
<button id="btn-occ" class="btn-show-history"><h1>% OCCUPATION - <i>% OCCUPANCY</i></h1></button>
<button id="btn-close-occ" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-occ\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">% OCCUPATION - <i>% OCCUPANCY</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>SALLES<br><i>SPA ROOMS</i></td>
    <td>THERAP.</td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td>{$row['occ_cab']}</td>
        <td>{$row['occ_prat']}</td>
    </tr>
    ";
    
};

echo "</table>";

?>
<br>

<!--TAUX DE CONVERSION HOTEL SPA------------------------------------------------------------------------------------------------------------>

<button id="export-conv" onclick="exportTableToExcel('table-conv');" class="exportXL">EXCEL</button>
<button id="btn-conv" class="btn-show-history"><h1>% CONV. HOTEL=>SPA - <i>% CONV. RATE</i></h1></button>
<button id="btn-close-conv" class="btn-close">X</button>

<?php

include("getAnalysis.php");

echo "
<table id=\"table-conv\" class=\"display-history\" border='1'>
<tr>
    <td style=\"background:rgb(230,230,230);\">% taux de conversion clients Hotel => Spa<br><i>% conversion rate Hotel guests => Spa</i></td>
    <td style=\"background:rgb(230,230,230);\">MOIS<br><i>MONTH</i></td>
    <td style=\"background:rgb(230,230,230);\">ANNEE<br><i>YEAR</i></td>
    <td>TAUX<br><i>RATE</i></td>
</tr>
";

while ($row = mysqli_fetch_assoc($result)){
    echo "
    <tr style=\"height:10px; border:none;\">
        <td style=\"background:rgb(230,230,230);\">{$row['nom_spa']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['mois']}</td>
        <td style=\"background:rgb(230,230,230);\">{$row['annee']}</td>
        <td>{$row['trans_hot_spa']}</td>
    </tr>
    ";
    
};

echo "</table>";

?>
<br>
<br>

<hr>
<br><br><br><br>

<a href="reporting.php"><button id="btn-home">Saisir un autre reporting<br><i>Input another report</i></button></a>
<a href="history.php"><button id="btn-anal">Consulter l'historique<br><i>View History</i></button></a>


</div>

<?php
include("fleur.php");
?>

<br><br><br><br><br><br><br>

<script src="js/removeHeader.js"></script>
<script src="js/analysis.js"></script>
<script src="js/calculator.js"></script>
<script src="js/exportExcel.js"></script>
<script src="js/graph.js"></script>

<?php
include_once 'footer.php';
?>