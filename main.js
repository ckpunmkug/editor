var active = undefined;
window.addEventListener
	(
	 'load'
	,function( event )
		{
		text.element = document.getElementById( 'text' );
		string.element = document.getElementById( 'string' );
		editor.form = document.getElementById( 'form' );
		editor.text = text;
		editor.string = string;
		editor.position(  );
		
		text.focus = text.element.focus(  );
		
		string.focus = function(  )
			{
			string.element.style.visibility = 'visible';
			string.element.focus(  );
			active = string;
			}
		string.blur = function(  )
			{
			string.element.style.visibility = 'hidden';
			text.element.focus(  );
			active = text;
			}
			
		string.blur(  );
		editor.filename = '       -=[ C To6o~Z Tak uHTepecHo ]=-';
		editor.load(  );
		}
	);
window.addEventListener
	(
	 'keydown'
	,function( event )
		{
		if( !event.ctrlKey && !event.altKey && !event.shiftKey )
			{
			if( event.key == 'Escape' )
				{
				if( active == string )
					{
					string.blur(  );
					return( true );
					}
				}
			}
		if( event.ctrlKey && !event.altKey && !event.shiftKey )
			{
			if( event.key == 'o' || event.key == 'щ' )
				{
				event.preventDefault(  );
				if( active != string )
					{
					string.focus(  );
					string.element.value = editor.filename;
					string.action = function( value )
						{
						editor.filename = value;
						editor.load(  );
						string.blur(  );
						}
					return( true );
					}
				}
			if( event.key == 's' || event.key == 'ы' )
				{
				event.preventDefault(  );
				editor.save(  );
				}
			if( event.key == 'g' || event.key == 'п' )
				{
				event.preventDefault(  );
				if( active != string )
					{
					string.focus(  );
					string.element.value = "";
					string.action = function( value )
						{
						editor.jump( value );
						string.blur(  );
						}
					return( true );
					}
				}
			}
		if( event.ctrlKey && !event.altKey && event.shiftKey )
			{
			if( event.key == 'S' || event.key == 'Ы' )
				{
				event.preventDefault(  );
				if( active != string )
					{
					string.focus(  );
					string.element.value = editor.filename;
					string.action = function( value )
						{
						editor.filename = value;
						string.blur(  );
						editor.save(  );
						}
					return( true );
					}
				}
			}
		if( active != undefined && typeof( active.keydown ) == 'function' )
			return( active.keydown( event ) );
		return( false );
		}
	);
window.addEventListener
	(
	 'input'
	,function( event )
		{
		if( active != undefined && typeof( active.input ) == 'function' )
			return( active.input( event ) );
		return( false );
		}
	);
window.addEventListener
	(
	 'resize'
	,function( event )
		{
		editor.position(  );
		}
	);