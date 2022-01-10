<!DOCTYPE html>
<html>
<body>

<?php
$dateh = date('c');
$identifiant = md5(2125047336);
$ref_commande = 'OM201503WEBP001';
$site = md5(1155013603);
$total = '1250';
$commande = "TEST Paiement par Orange Money "; $algo = "SHA512";
$cle_secrete = "1834D776BF8E44999D8F5415D093F621B4583EA84A4894E2CE731FF5E0DB22B9";
$cle_bin = pack("H*", $cle_secrete);
$message = "S2M_COMMANDE=$commande". "&S2M_DATEH=$dateh".
"&S2M_HTYPE=$algo"."&S2M_IDENTIFIANT=$identifiant". "&S2M_REF_COMMANDE=$ref_commande".
"&S2M_SITE=$site". "&S2M_TOTAL=$total";
$hmac = strtoupper(hash_hmac(strtolower($algo), $message, $cle_bin));

?> 

<form method="POST" action="https://api.paiementorangemoney.com">
<input type="hidden" name="S2M_IDENTIFIANT" value="<?php echo $identifiant;?>">
<input type="hidden" name="S2M_SITE" value="<?php echo $site;?>">
 <input type="hidden" name="S2M_TOTAL" value="<?php echo $total;?>"> 
 <input type="hidden" name="S2M_REF_COMMANDE" value="<?php echo $ref_commande;?>">
<input type="hidden" name="S2M_COMMANDE" value="<?php echo $commande;?>">
<input type="hidden" name="S2M_DATEH" value="<?php echo $dateh;?>"> 
<input type="hidden" name="S2M_HTYPE" value="<?php echo $algo;?>"> 
<input type="hidden" name="S2M_HMAC" value="<?php echo $hmac;?>"> 
<input type="image" name="submit" src="http://www.orange-money.sn/tpl/images/logo.jpg" style="border: 0px solid black;border-radius: 10px; -moz- border-radius: 10px; - khtml- border-radius: 10px; - webkit-border-radius: 10px;" alt="Payer" />
</form>

</body>
</html>
