import { mixMembers } from 'stencil-awesome-test';

import { getHeadingWcHtml } from '../../heading/test/html.mock';
import { getIconHtml } from '../../icon/test/html.mock';
import { Props } from '../types';

export const getAlertHtml = (props: Props, innerHTML = '', additionalHTML = ''): string => {
	props = mixMembers(
		{
			_level: 1,
		},
		props
	);
	const type: string = props._type !== undefined ? props._type : 'default';
	props._type = props._type || 'default';
	props._variant = props._variant || 'msg';
	return `<kol-alert${additionalHTML}>
  <mock:shadow-root>
    <kol-alert-wc class="${type} ${props._variant}"${props._alert === true ? ' role="alert"' : ''}>
			<div class="heading">
				${getIconHtml(
					{
						_label:
							props._label !== undefined
								? ''
								: props._type === 'success'
								? 'kol-success'
								: props._type === 'error'
								? 'kol-error'
								: props._type === 'warning'
								? 'kol-warning'
								: props._type === 'info'
								? 'kol-info'
								: 'kol-message',
						_icon:
							props._type === 'success'
								? 'codicon codicon-pass'
								: props._type === 'error'
								? 'codicon codicon-error'
								: props._type === 'warning'
								? 'codicon codicon-warning'
								: props._type === 'info'
								? 'codicon codicon-info'
								: 'codicon codicon-comment',
					},
					` class="heading-icon"`
				)}
				<div>
					${
						typeof props._label === 'string' && props._label.length > 0
							? getHeadingWcHtml(
									{
										_label: '',
										_level: props._level,
									},
									{
										default: props._label,
									}
							  )
							: ''
					}
					${
						props._variant === 'msg'
							? `<div class="content">
									<slot />
								</div>`
							: ''
					}
				</div>
			</div>${
				props._variant === 'card'
					? `<div class="content">
						<slot />
					</div>`
					: ''
			}
    </kol-alert-wc>
  </mock:shadow-root>
 ${innerHTML}
</kol-alert>`;
};
