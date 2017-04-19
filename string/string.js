var string =
	{
	 element: undefined
	,keydown: function(  )
		{
		if( !event.ctrlKey && !event.altKey && !event.shiftKey )
			{
			if( event.key == 'Enter' )
				{
				event.preventDefault(  );
				if( typeof( this.action ) == 'function' && this.element != undefined )
					{
					this.action( this.element.value );
					return( true );
					}
				}
			}
		return( false );
		}
	,action: function( value )
		{
		return( undefined );
		}
	};