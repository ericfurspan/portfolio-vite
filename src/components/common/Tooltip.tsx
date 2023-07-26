import { Tooltip as MuiTooltip, TooltipProps, tooltipClasses, styled } from '@mui/material';

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: theme.typography.pxToRem(12),
  },
}));

const Tooltip = (props: TooltipProps) => <StyledTooltip {...props}>{props.children}</StyledTooltip>;

export default Tooltip;
