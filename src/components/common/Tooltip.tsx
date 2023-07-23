import { Tooltip as MuiTooltip, TooltipProps, tooltipClasses, styled } from '@mui/material';

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: theme.palette.common.white,
    // color: theme.palette.common.black,
    boxShadow: theme.shadows[1],
    fontSize: theme.typography.pxToRem(14),
  },
}));

const Tooltip = (props: TooltipProps) => <StyledTooltip {...props}>{props.children}</StyledTooltip>;

export default Tooltip;
