var text =
	{
	 element: undefined
	,enter: false
	,input: function( event )
		{
		if( this.enter )
			{
			this.enter = false;
			var position = this.element.selectionStart;
			if( position != false && position >= 2 )
				{
				var index = position - 2;
				while( index >= 0 )
					{
					if( this.element.value.charAt( index ) == "\n" )
						break;
					index--;
					}
				var spaces = '';
				while( index < position )
					{
					index++;
					char = this.element.value.charAt( index );
					if( char == ' ' || char == "\t" )
						spaces += char;
					else
						break;
					}
				document.execCommand( 'insertText', false, spaces );
				}
			return( true );
			}
		return( false );
		}
	,keydown: function( event )
		{
		if( !event.ctrlKey && !event.altKey && !event.shiftKey )
			{
			if( event.key == 'Tab' )
				{
				event.preventDefault(  );
				document.execCommand( 'insertText', false, "\t" );
				return( true );
				}
			if( event.key == 'Enter' )
				{
				this.enter = true;			
				return( true );
				}
			}
		if( !event.ctrlKey && event.altKey && !event.shiftKey )
			{
			var 
				 widthScrollStep = 100  // Шаг микроскрола по горизонтали
				,heightScrollStep = 50  // и вертикали в пикселах
				;
			if( event.key == 'ArrowRight' )
				{
				event.preventDefault(  );
				this.element.scrollLeft += widthScrollStep;
				return( true );
				}
			if( event.key == 'ArrowLeft' )
				{
				event.preventDefault(  );
				this.element.scrollLeft -= widthScrollStep;
				return( true );
				}
			if( event.key == 'ArrowUp' )
				{
				event.preventDefault(  );
				this.element.scrollTop -= heightScrollStep;
				return( true );
				}
			if( event.key == 'ArrowDown' )
				{
				event.preventDefault(  );
				this.element.scrollTop += heightScrollStep;
				return( true );
				}
			}
		return( false );
		}
	};