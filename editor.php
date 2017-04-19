<?php
                                                                              /*
Ниже происходит проверка на то откуда пришел запрос. Если Origin и совпадает 
с сервером где лежит скрипт, а Refer указывает на editor.html, то всё в порядке.
                                                                              */
if
	(
	   isset( $_SERVER[ 'HTTP_ORIGIN' ] )
	&& isset( $_SERVER[ 'REQUEST_SCHEME' ] )
	&& isset( $_SERVER[ 'SERVER_NAME' ] )
	&& isset( $_SERVER[ 'HTTP_REFERER' ] )
	&& isset( $_SERVER[ 'REQUEST_URI' ] )
 	)
	{
	if( $_SERVER[ 'HTTP_ORIGIN' ] == $_SERVER[ 'REQUEST_SCHEME' ].'://'.$_SERVER[ 'SERVER_NAME' ]
	 && preg_match( '/^(.*)\/editor.php$/', $_SERVER[ 'REQUEST_URI' ], $matches ) == 1 )
		{
		if( $_SERVER[ 'HTTP_REFERER' ] == $_SERVER[ 'REQUEST_SCHEME' ].'://'.$_SERVER[ 'SERVER_NAME' ].$matches[ 1 ].'/editor.html' )
			goto start;
		}
	}
http_response_code( 404 );
exit(  );
start:
if( isset( $_POST[ 'command' ] ) )
	{
	switch( $_POST[ 'command' ] )
		{
		case( 'save' ):
			if( isset( $_POST[ 'filename' ] ) && isset( $_POST[ 'text' ] ) )
				{
				$filename = $_POST[ 'filename' ];
				$text = preg_replace( "/\r\n/", PHP_EOL, $_POST[ 'text' ] );
				if( file_put_contents( $filename, $text ) !== false )
					{
					http_response_code( 200 );
					exit(  );
					}
				else
					{
					trigger_error( "bad filename", E_USER_WARNING );
					http_response_code( 403 );
					exit(  );
					}
				}
			else
				{
				trigger_error( "filename name or text not set", E_USER_WARNING );
				http_response_code( 400 );
				exit(  );
				}
	 	case( 'load' ):
			if( isset( $_POST[ 'filename' ] ) )
				{
				$filename = $_POST[ 'filename' ];
				if( is_file( $filename ) && is_readable( $filename ) )
					{
					$text = file_get_contents( $filename );
					if( is_string( $text ) )
						{
						http_response_code( 200 );
						header( 'Content-Type: text/plain' );
						echo( $text );
						exit(  );
						}
					else
						{
						http_response_code( 409 );
						exit(  );
						}
					}
				else
					{
					trigger_error( "bad filename", E_USER_WARNING );
					http_response_code( 403 );
					exit(  );
					}
				}
			else
				{
				trigger_error( "filename name not set", E_USER_WARNING );
				http_response_code( 400 );
				exit(  );
				}
		default:
			trigger_error( "unknown command", E_USER_WARNING );
			http_response_code( 400 );
			exit(  );
	 	}
	}
else
	{
	trigger_error( "command not set", E_USER_WARNING );
	http_response_code( 400 );
	exit(  );
	}