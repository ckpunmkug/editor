<?php
$width = 802;
$image = imagecreate( $width, 1 );
if( is_resource( $image ) )
	{
	$background = imagecolorallocate( $image, 0x00, 0x00, 0x00 );
	$pixel = imagecolorallocate( $image, 0x00, 0x10, 0x00 );
	for( $x = 0; $x < ( $width - 1 ); $x++ )
		imagesetpixel( $image, $x, 0, $background );
	imagesetpixel( $image, ( $width - 1 ), 0, $pixel );
	header( 'Content-Type: image/png' );
	imagepng( $image );
	imagedestroy( $image );
	exit(  );
	}