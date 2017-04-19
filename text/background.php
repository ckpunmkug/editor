<?php
$image = imagecreate( 1, 3 );
if( is_resource( $image ) )
	{
	$top = imagecolorallocate( $image, 0x00, 0x00, 0x00 );
	$bottom = imagecolorallocate( $image, 0x00, 0x10, 0x00 );
	imagesetpixel( $image, 0, 0, $top );
	imagesetpixel( $image, 0, 1, $bottom );
	imagesetpixel( $image, 0, 2, $bottom );
	header('Content-Type: image/png');
	imagepng($image);
	imagedestroy($image);
	exit(  );
	}